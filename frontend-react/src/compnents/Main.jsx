import React from "react";
import Button from "./Button";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light ">Stock Prediction Protal</h1>
          <p className="text-light lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            deleniti necessitatibus officia dolore. Alias expedita inventore
            suscipit consequatur, e nim ipsum error! Reprehenderit eligendi
            voluptatibus corrupti possimus tempore natus, repudiandae optio?
          </p>
          <Button text="Login" class="btn-outline-info" url="/login"></Button>
        </div>
      </div>
    </>
  );
};

export default Main;
