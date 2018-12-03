import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark text-light h-100">
        <div className="row m-0 p-2 h-100">
          <ul className="list-unstyled col-sm-6 mb-0 text-center my-auto">
            <li className="p-2">
              <Link to="/" className={`${style.noStyle}`}>
                Xubaka
              </Link>
            </li>
            <li className="p-2">Galerie</li>
            <li className="p-2">
              <Link to="/who-are-we" className={`${style.noStyle}`}>
                Qui sommes nous
              </Link>
            </li>
          </ul>
          <ul className="list-unstyled col-sm-6 mb-0 text-center my-auto">
            <li className="p-2">Trouver Sodium Cycle</li>
            <li className="p-2">Précommande</li>
            <li className="pt-2 pb-0">
              <Link to="/contact" className={`${style.noStyle}`}>
                Nous contacter
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
