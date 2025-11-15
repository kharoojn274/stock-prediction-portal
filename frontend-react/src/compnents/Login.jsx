import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // loading state after clicking Login button
  const [loading, setLoading] = useState(false);
  // state for storing the errors
  const [error, setError] = useState("");

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  // use navigte

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // user data object and send it with an api request
    const userData = {
      username,
      password,
    };

    // axios code
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/token/",
        userData
      );
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      setIsLoggedIn(true);
      navigate("/");

      setError({});
    } catch (error) {
      setError("Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded">
          <h3 className="text-light text-center mb-4">Login to our Portal</h3>
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
            </div>
            {error && <div className="text-danger">{error}</div>}
            {loading ? (
              <button
                type="submit"
                className="btn btn-info d-block mx-auto"
                disabled
              >
                <FontAwesomeIcon icon={faSpinner} spin></FontAwesomeIcon>
                Loging in
              </button>
            ) : (
              <button type="submit" className="btn btn-info d-block mx-auto">
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
