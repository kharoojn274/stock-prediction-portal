import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light ">Stock Prediction Protal</h1>
          <p className="text-light lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            deleniti necessitatibus officia dolore. Alias expedita inventore
            suscipit consequatur, enim ipsum error! Reprehenderit eligendi
            voluptatibus corrupti possimus tempore natus, repudiandae optio?
          </p>
          <Button text="Login" class="btn-outline-info"></Button>
        </div>
      </div>
    </>
  );
};

export default Main;
