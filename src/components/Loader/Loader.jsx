import React from "react";
import Logo from "../../assets/Images/Logo/logo.png";
import Style from "./Loader.module.css";

export default function Loader() {
  return (
    <div className="h-100 w-100">
      <img className={`${Style.imgLogo} mt-4`} src={Logo} />
    </div>
  );
}
