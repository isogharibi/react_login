import { useState } from "react";
import "./register.scss";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function register() {
  const [Username, SetUsername] = useState("");
  const [Email, SetEmail] = useState("");
  const [Number, SetNumber] = useState();
  const [Grade, SetGrade] = useState();

  const SignUser = (Event) => {
    Event.preventDefault();

    if (Username !== "" && Email !== "" && Number !== "" && Grade !== "") {
      fetch(`https://668fe5b6c0a7969efd9a085a.mockapi.io/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          UserName: Username,
          Email: Email,
          Number: Number,
          Grade: Grade,
          id: "1",
        }),
      })
        .then((Response) => Response.json())
        .then((Data) => console.log(Data));
    } else {
      console.log("pleas write the inputs");
    }
  };

  const Notif = () =>
    toast.info("Pleas enter your nationality", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });

  return (
    <>
      <ToastContainer />
      <form className="login-form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onInput={(input) => SetUsername(input.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onInput={(input) => SetEmail(input.target.value)}
        />

        <label htmlFor="number">Number</label>
        <input
          type="number"
          id="number"
          name="number"
          onInput={(input) => SetNumber(input.target.value)}
        />

        <label htmlFor="grade">Grade</label>
        <input
          type="text"
          id="grade"
          name="grade"
          onInput={(input) => SetGrade(input.target.value)}
        />

        <button onClick={SignUser} type={"submit"}>
          submit
        </button>
      </form>
      <div className="Notif-Div">
        <button className="Notif-btn" onClick={Notif}>
          Notif
        </button>
      </div>
    </>
  );
}

export default register;
