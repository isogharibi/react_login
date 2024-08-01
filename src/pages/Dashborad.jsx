import React from "react";
import "./Dashborad.scss";

import { useNavigate } from "react-router-dom";

function Dashborad() {
  const navigate = useNavigate();

  function ChangeLink() {
    navigate("/login");
  }

  function ChangeLink2() {
    navigate("/Register")
  }



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
          <button className="cool-button" onClick={ChangeLink}>
            Login
          </button>
          <button className="cool-button" onClick={ChangeLink2}>
            Register
          </button>
        </div>
      </div>
    </section>
  );
}

export default Dashborad;
