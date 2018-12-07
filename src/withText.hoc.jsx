import React from "react";
import axios from "axios";

/*envoyer composant puis appeler fonction t dans le composant pour tester la 
présence de valeur dans le texte*/

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
      axios.get("http://localhost:8000/text/FR").then(res => {
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
