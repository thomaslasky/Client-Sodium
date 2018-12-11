import React from "react";
import axios from "axios";

export default function withText(BaseComponent) {
  class Text extends React.Component {
    constructor(props) {
      super(props);
      let userLang = navigator.language || navigator.userLanguage;
      userLang = userLang.substring(0, 2).toUpperCase();
      this.state = {
        texts: "",
        currentLang: userLang
      };

      this.t = this.t.bind(this);
    }

    componentDidMount() {
      axios
        .get(`http://localhost:8000/text/${this.state.currentLang}`)
        .then(res => {
          this.setState({ texts: res.data.texts });
        });
    }

    onLangChange(lang) {
      axios.get(`http://localhost:8000/text/${lang}`).then(res => {
        this.setState({ texts: res.data.texts, currentLang: lang });
      });
    }

    t(key) {
      if (this.state.texts[key]) {
        return this.state.texts[key];
      } else {
        return "";
      }
    }

    render() {
      return (
        <BaseComponent
          t={this.t}
          onLangChange={this.onLangChange}
          currentLang={this.state.currentLang}
          {...this.props}
        />
      );
    }
  }

  Text.displayName =
    "withText(" + (BaseComponent.displayName || BaseComponent.name) + ")";
  return Text;
}
