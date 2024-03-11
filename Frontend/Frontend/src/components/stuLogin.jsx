import { Link, useNavigate } from "react-router-dom";
import "../assets/css/LoginForm.css"
import { useState } from "react";
import axios from "axios";
import Header from "./header/header";
import Footer from "./Footer/footer";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./Redux/authSlice";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    pswd: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/students/authenticate', credentials)
      .then((res) => {
        console.log('Login successful');
        const details = res.data;
        console.log('Token and Role: ', details);
        const token = details;
        const tokenExpiration = new Date();
        tokenExpiration.setHours(tokenExpiration.getHours() + 1);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('tokenExpiration', tokenExpiration.toString());
        // sessionStorage.setItem('role', details.role);
      })
      .then(() => {
        const token = sessionStorage.getItem('token');
        const tokenExpiration = sessionStorage.getItem('tokenExpiration');
        // const role = sessionStorage.getItem('role');

        if (token && tokenExpiration && new Date(tokenExpiration) > new Date()) {
          const decodedToken = jwtDecode(token);
        // const role = decodedToken.role;
        // console.log(role);
        const {exp,iat,role,sub} = decodedToken;
        dispatch(loginSuccess({exp,iat,role,sub})); 
        console.log("Stored Redux:",{role,exp,iat,sub});
          
          if (role === 'USER') {
            navigate('/');
          } else if(role === 'ADMIN'){
            navigate('/a');
          }
        } else {
          console.log('Invalid credentials');
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  };
  
  return (
    <div>
      <Header/>
      <div className="auth-form-container1">
            <h2 className="l1">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label required className="em" htmlFor="email">Email</label>
                <br/>
                <input className="i1" required type="email" value={credentials.email} onChange={handleChange} placeholder="youremail@gmail.com" id="email" name="email" />
                <br/>
                <label className="pa" htmlFor="pswd">pswd</label>
                <br/>
                <input className="i1" required type="pswd" value={credentials.pswd} onChange={handleChange} placeholder="********" id="pswd" name="pswd" /><br/>
                <button className="button1" type="submit" >Log In</button>
            </form>
            <Link to={"/Signup"}><button className="link-btn1">Do not have an account? Register here.</button></Link>
        </div>
     <Footer/>
    </div>
  );
};

export default Login;
