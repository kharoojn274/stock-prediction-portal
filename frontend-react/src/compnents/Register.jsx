import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // state for storing the errors
  const [errors, setError] = useState({});
  //  success msg
  const [success, setSuccess] = useState(false);
  // loading state after clicking register button
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // user data object and send it with an api request
    const userData = {
      username,
      email,
      password,
    };

    // axios code
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/register/",
        userData
      );
      setError({});
      setSuccess(true);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded">
          <h3 className="text-light text-center mb-4">Create an Account</h3>
          <form action="" onSubmit={onSubmitHandler}>
            <div className="mb-3">
              <input
                type="text"
                name=""
                className="form-control "
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <small>
                {errors.username && (
                  <div className="text-danger ">{errors.username}</div>
                )}
              </small>
            </div>

            <div className="mb-3">
              <input
                type="email"
                name=""
                className="form-control "
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                name=""
                className="form-control  "
                placeholder="Set Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small>
                {errors.password && (
                  <div className="text-danger ">{errors.password}</div>
                )}
              </small>
            </div>

            {success && (
              <div className="alert alert-success">Registration Successful</div>
            )}
            {loading ? (
              <button
                type="submit"
                className="btn btn-info d-block mx-auto"
                disabled
              >
                <FontAwesomeIcon icon={faSpinner} spin></FontAwesomeIcon>
                Please wait...
              </button>
            ) : (
              <button type="submit" className="btn btn-info d-block mx-auto">
                Register
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
