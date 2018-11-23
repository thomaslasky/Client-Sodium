import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark text-light">
        <div className="row m-0 p-2">
          <ul className="list-unstyled col-sm-6 mb-0 text-center">
            <li>
              <Link to="/" className={`${style.noStyle}`}>
                Xubaka
              </Link>
            </li>
            <li>Galerie</li>
            <li>
              <Link to="/who-are-we" className={`${style.noStyle}`}>
                Qui sommes nous
              </Link>
            </li>
          </ul>
          <ul className="list-unstyled col-sm-6 mb-0 text-center">
            <li>Trouver Sodium Cycle</li>
            <li>
              <Link to="/preorder" className={`${style.noStyle}`}>
                Précommande
              </Link>
            </li>
            <li>
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
