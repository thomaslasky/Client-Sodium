import React from "react";
import axios from "axios";

/**
 * Use of observer pattern
 */
class TextObservable {
  constructor() {
    this._observers = {};
  }

  /**
   * @param fnObserver {func} the function to call in the notifyALl
   */
  register(fnObserver) {
    this._observers[fnObserver.name] = fnObserver;
  }

  unregister(fnObserver) {
    delete this._observers[fnObserver.name];
  }

  notifyAll(...args) {
    Object.values(this._observers).forEach(fnObserver => fnObserver(...args));
  }
}

class TextSingleton {
  constructor() {
    this.texts = "";
    let userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.substring(0, 2).toUpperCase();
    this.lang = userLang;
    this.isReady = false;
    this.isFetching = false;
    this.t = this.t.bind(this);
  }

  /**
   * @return {Promise<Boolean>}
   */
  init() {
    this.isFetching = true;
    return axios.get(`http://localhost:8000/text/${this.lang}`).then(res => {
      this.texts = res.data.texts;
      this.isReady = true;
      this.isFetching = false;
      return true;
    });
  }

  /**
   *
   * @return {Promise<Boolean>} set lang is done
   */
  setLang(lang) {
    if (this.lang !== lang) {
      this.lang = lang;
      return this.init();
    } else {
      return Promise.resolve(false);
    }
  }

  getLang() {
    return this.lang;
  }

  t(key) {
    if (this.texts[key]) {
      return this.texts[key];
    } else {
      return "";
    }
  }
}

const textObservable = new TextObservable();
const textSingleton = new TextSingleton();

export default function withText(BaseComponent) {
  class TextObserver extends React.Component {
    constructor(props) {
      super(props);

      this.handleNotify = this.handleNotify.bind(this);
      this.handleChangeLang = this.handleChangeLang.bind(this);
    }
    componentDidMount() {
      textObservable.register(this.handleNotify);
      if (!textSingleton.isFetching && !textSingleton.isReady) {
        textSingleton.init().then(() => textObservable.notifyAll());
      }
    }

    componentWillUnmount() {
      textObservable.unregister(this.handleNotify);
    }

    handleNotify() {
      this.forceUpdate();
    }

    handleChangeLang(lang) {
      if (!textSingleton.isFetching && textSingleton.isReady) {
        textSingleton
          .setLang(lang)
          .then(isChanged => (isChanged ? textObservable.notifyAll() : false));
      }
    }

    render() {
      return (
        <BaseComponent
          t={textSingleton.t}
          onLangChange={this.handleChangeLang}
          currentLang={textSingleton.getLang()}
          {...this.props}
        />
      );
    }
  }

  TextObserver.displayName =
    "withText(" + (BaseComponent.displayName || BaseComponent.name) + ")";
  return TextObserver;
}
