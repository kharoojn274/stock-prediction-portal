import React, { useContext } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    const navigate = useNavigate("/login");
  };
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <Link to="/" className="navbar-brand text-light">
          {" "}
          Stock Prediction Portal
        </Link>
        <div>
          {isLoggedIn ? (
            // <span className="text-light">Logout</span>

            <button class="btn btn-danger" onClick={handleLogout}>
              Logut
            </button>
          ) : (
            <>
              <Button
                text="Login"
                class="btn-outline-info"
                url="/login"
              ></Button>
              &nbsp;
              <Button text="Register" class="btn-info" url="/register"></Button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
