import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import withText from "../../withText.hoc";

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark text-light h-100">
        <div className="row m-0 p-2 h-100">
          <ul className="list-unstyled col-sm-6 mb-0 text-center my-auto">
            <li className="p-2">
              <Link to="/" className={`${style.noStyle}`}>
                {this.props.t("textNav1")}
              </Link>
            </li>
            <li className="p-2">
              <Link to="/Gallery" className={`${style.noStyle}`}>
                {this.props.t("textNav2")}
              </Link>
            </li>
            <li className="p-2">
              <Link to="/technology" className={`${style.noStyle}`}>
                {this.props.t("textNav3")}
              </Link>
            </li>
          </ul>
          <ul className="list-unstyled col-sm-6 mb-0 text-center my-auto">
            <li className="p-2">
              <Link to="/who-are-we" className={`${style.noStyle}`}>
                {this.props.t("textNav4")}
              </Link>
            </li>
            <li className="p-2">
              <Link to="/preorder" className={`${style.noStyle}`}>
                {this.props.t("textNav5")}
              </Link>
            </li>
            <li className="pt-2 pb-0">
              <Link to="/contact" className={`${style.noStyle}`}>
                {this.props.t("textNav6")}
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default withText(Footer);
