import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <a href="" className="navbar-brand text-light">
          {" "}
          Stock Prediction Portal
        </a>
        <div>
          <Button text="Login" class="btn-outline-info"></Button>
          &nbsp;
          <Button text="Register" class="btn-info"></Button>
        </div>
      </nav>
    </>
  );
};

export default Header;
