import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded">
          <h3 className="text-light text-center mb-4">Login</h3>
          <form action="">
            <input
              type="text"
              name=""
              id=""
              className="form-control mb-3"
              placeholder="Enter username"
            />

            <input
              type="password"
              name=""
              id=""
              className="form-control mb-4 "
              placeholder="Set Password"
            />
            <button type="submit" className="btn btn-info d-block mx-auto">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
