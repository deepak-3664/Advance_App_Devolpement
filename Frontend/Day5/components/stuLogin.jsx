
import '../assets/css/Login.css';


const Login = () => {
 
  return (
    <div className='body'>
    <html key="1">
    <head>
      <title>
        Slide Navbar
      </title>
      <link
        href="slide navbar style.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
        rel="stylesheet"
      />
    </head>
    <div className='HEADING'>
      <h2>STUDENT LOGIN</h2>
    </div>
    <div className='body2'>
      <div className="main">
        <input
          aria-hidden="true"
          id="chk"
          type="checkbox"
          className='input3'
        />
        <div className="signup">
          <form>
            <label
              aria-hidden="true"
              htmlFor="chk"
              className='label3'
            >
              Sign up
            </label>
            <input
              name="txt"
              placeholder="User name"
              required
              type="text"
              className='input3'
            />
            <input
              name="email"
              placeholder="Email"
              required
              type="email"
              className='input3'
            />
            <input
              name="pswd"
              placeholder="Password"
              required
              type="password"
              className='input3'
            />
            <button className='Loginbutton'>
              Sign up
            </button>
          </form>
        </div>
        <div className="login">
          <form>
            <label
              aria-hidden="true"
              htmlFor="chk"
              className='label3'
            >
              Login
            </label>
            <input
              name="email"
              placeholder="Email"
              required
              type="email"
              className='input3'
            />
            <input
              name="pswd"
              placeholder="Password"
              required
              type="password"
              className='input3'
            />
            <button className='Loginbutton'>
              Login
            </button>
          </form>
        </div>
      </div>
      </div>
  </html>
  </div>
  );
};

export default Login;