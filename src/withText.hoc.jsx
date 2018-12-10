import React from "react";
import axios from "axios";

export default function withText(BaseComponent) {
  class Text extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        texts: ""
      };

      this.t = this.t.bind(this);
    }

    componentDidMount() {
      var userLang = navigator.language || navigator.userLanguage;
      userLang = userLang.substring(0, 2).toUpperCase();

      axios.get(`http://localhost:8000/text/${userLang}`).then(res => {
        this.setState({ texts: res.data.texts });
      });
    }

    onLangChange(lang) {
      axios.get(`http://localhost:8000/text/${lang}`).then(res => {
        this.setState({ texts: res.data.texts });
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
          {...this.props}
        />
      );
    }
  }

  Text.displayName =
    "withText(" + (BaseComponent.displayName || BaseComponent.name) + ")";
  return Text;
}
