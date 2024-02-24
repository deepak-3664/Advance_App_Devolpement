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
        />
        <div className="signup">
          <form>
            <label
              aria-hidden="true"
              htmlFor="chk"
            >
              Sign up
            </label>
            <input
              name="txt"
              placeholder="User name"
              required
              type="text"
            />
            <input
              name="email"
              placeholder="Email"
              required
              type="email"
            />
            <input
              name="pswd"
              placeholder="Password"
              required
              type="password"
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
            >
              Login
            </label>
            <input
              name="email"
              placeholder="Email"
              required
              type="email"
            />
            <input
              name="pswd"
              placeholder="Password"
              required
              type="password"
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