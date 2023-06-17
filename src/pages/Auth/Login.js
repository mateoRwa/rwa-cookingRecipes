import { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import useStore from "../../store/useStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const setToken = useStore((state) => state.setToken);
  const submitLoginHandler = (e) => {
    e.preventDefault();
    let emailError, pwdError;
    const passwordValidator =
      /^(([a-zA-Z0-9]+)|([a-zA-Z0-9]+((?:\_[a-zA-Z0-9]+)|(?:\.[a-zA-Z0-9]+))*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-zA-Z]{2,6}(?:\.[a-zA-Z]{2})?)$)/;
    if (emailVal.length === 0 || !passwordValidator.test(emailVal)) {
      setEmailError("Please enter valid email address.");
      emailError = true;
    } else {
      setEmailError("");
      emailError = false;
    }
    if (passwordVal.length < 6) {
      setPasswordError("Please enter at least 6 characters.");
      pwdError = true;
    } else {
      setPasswordError("");
      pwdError = false;
    }

    if (!emailError && !pwdError) {
      // Ako su zadovoljeni uvjeti

      let url;
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDuZFy66qGr8Adb2RtFafoh_c88VYsoiF4`;
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: emailVal,
          password: passwordVal,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.idToken) {
            setToken(data.idToken);
            localStorage.setItem("token", data.idToken);
            window.location.href = "/";
            setEmailVal("");
            setPasswordVal("");
          }
          if (data.error.code === 400) {
            toast.error(data.error.message, {
              position: "bottom-center",
              autoClose: 2000,
            });
          }
        });
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={submitLoginHandler}>
        <div className="email">
          <label htmlFor="email">Enter email</label>
          <input
            id="email"
            type="text"
            className="input"
            value={emailVal}
            onChange={(e) => setEmailVal(e.target.value)}
          />
        </div>
        <div className="error-div">
          {emailError && <span>{emailError}</span>}
        </div>
        <div className="password">
          <label htmlFor="password">Enter password</label>
          <input
            id="password"
            type="password"
            className="input"
            value={passwordVal}
            onChange={(e) => setPasswordVal(e.target.value)}
          />
        </div>
        <div className="error-div">
          {passwordError && <span>{passwordError}</span>}
        </div>
        <Link to="/register" className="register-link">
          Don't have an account?
        </Link>
        <div className="button-container">
          <button className="button" type="submit">
            Login
          </button>
        </div>
      </form>
      <ToastContainer toastStyle={{ width: "600px" }} />
    </div>
  );
};

export default Login;
