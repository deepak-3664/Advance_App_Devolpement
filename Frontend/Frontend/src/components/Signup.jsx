import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Signin.css";

import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icon components
import Header from "./header/header";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [mobile, setMobile] = useState("");
  const [showpswd, setShowpswd] = useState(false); // State variable for pswd visibility
  const Role = "USER";

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlepswdChange = (e) => {
    setPswd(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setMobile(e.target.value);
  };

  const togglepswdVisibility = () => {
    setShowpswd(!showpswd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // pswd validation regex
    const pswdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^\da-zA-Z]).{8,}$/;

    if (!pswdRegex.test(pswd)) {
      alert(
        "pswd must contain at least 8 characters with at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/students/addUser", {
        fullName: name,
        email: email,
        pswd: pswd,
        mobile: mobile,
        role: Role,
      });
      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      <Header/>
      <div className="login">
        <center>
          <div className="h21">Register</div>
        </center>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container1">
            <label className="lab" htmlFor="name">
              Name
            </label>
            <input
              required
              className="lab1"
              value={name}
              id="name"
              onChange={handleNameChange}
              placeholder="Enter Your Fullname"
            />
          </div>
          <div className="input-container1">
            <label className="lab" htmlFor="email">
              E-mail
            </label>
            <input
              className="lab1"
              required
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your Email"
              id="email"
              name="email"
            />
          </div>
          <div className="input-container1">
            <label className="lab" htmlFor="pswd">
              pswd
            </label>
            <div className="pswd-input-container">
              <input
                className="lab1 pswd-input"
                required
                type={showpswd ? "text" : "pswd"} // Toggle between text and pswd type
                value={pswd}
                onChange={handlepswdChange}
                placeholder="Enter your pswd"
                id="pswd"
                name="pswd"
              />
              <span className="toggle-pswd-icon" onClick={togglepswdVisibility}>
                {showpswd ? <FaEyeSlash /> : <FaEye />} {/* Toggle eye icon */}
              </span>
            </div>
          </div>
          <div className="input-container1">
            <label className="lab" htmlFor="phonenumber">
              Mobile Number
            </label>
            <input
              className="lab1"
              required
              type="phonenumber"
              value={mobile}
              onChange={handlePhoneNumberChange}
              placeholder="Enter your Moblie Number"
              id="number"
              name="number"
            />
          </div>
          <div className="button-container">
            <button className="button2" type="submit">
              Proceed
            </button>
          </div>
        </form>
        <div className="register">
          <Link to={"/login"}>
            <button className="link-btn2">
              Already have an account? Login here.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
