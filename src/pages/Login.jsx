import React from "react";
import { useState } from "react";
import "./Login.scss";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Email, SetEmail] = useState("");
  const [Username, SetUsername] = useState("");

  const navigate = useNavigate();

  const loginUser = (button) => {
    button.preventDefault();

    if (Username !== "" && Email !== "") {
      try {
        fetch(`https://668fe5b6c0a7969efd9a085a.mockapi.io/api/users`, {
          method: "POST",
        })
          .then((Response) => Response)
          .then((data) => {
            if (data.statusText === "Created") {
              toast.success("حساب کاربری با موفقیت ساخته شد", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
                onClose: () => navigate("/"),
              });
            }
          });
        localStorage.setItem("username", Username);
        localStorage.setItem("email", Email);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const Notifs = () =>
    toast.info("Pleas fill the inputs", {
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
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="Email">Email:</label>
          <input
            type="text"
            id="Email"
            name="Email"
            onInput={(input) => SetEmail(input.target.value)}
          />
          <label htmlFor="password">Username:</label>
          <input
            type="Username"
            id="Username"
            name="Username"
            onInput={(input) => SetUsername(input.target.value)}
          />
          <button type="submit" onClick={loginUser}>
            Login
          </button>
        </form>
        <div className="Notif-Div">
          <button className="Notif-btn" onClick={Notifs}>
            Why my its not work
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
