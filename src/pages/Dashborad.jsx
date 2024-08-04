import React, { useContext, useEffect, useState } from "react";
import "./Dashborad.scss";

import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

function Dashborad() {
  const { Login, SetLogin } = useContext(LoginContext);

  useEffect(() => {
    const StoredToken = localStorage.getItem("stateLogin");
    SetLogin(StoredToken);
    console.log(Login);
  }, [Login]);

  return (
    <section className="body">
      <div className="welcome-page">
        <h1>Welcome to Our Website</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere minus{" "}
          <br />
          nostrum possimus iusto temporibus culpa iure necessitatibus dicta! Est{" "}
          <br />
          dicta excepturi id nostrum aspernatur nesciunt nihil sed sequi <br />
          praesentium laborum!
        </p>
        <div className="btns">
          {Login ? (
            <>
              <Link to={"/LoginedPage "}>
                <button className="cool-button">LoginedPage</button>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/Login "}>
                <button className="cool-button">Login</button>
              </Link>
              <Link to={"/Register "}>
                <button className="cool-button">Register</button>{" "}
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Dashborad;
