import '../assets/css/Login.css';

function LoginRegister() {
  return (
    <div className="auth-form-container1">
      <h2 className="l1">STUDENT LOGIN</h2><br/>
      <form className="login-form" >
        <label required className="em" htmlFor="email">EMAIL:</label>
        <br />
        <input className="i1"  type="email" placeholder="Enter your gmail" id="email" name="email" />
        <br />
        <label className="pa" htmlFor="password">PASSWORD:</label>
        <br />
        <input className="i1" type="password" placeholder="Enter your password" id="password" name="password" /><br />
        <button className="button1" type="submit" >Log In</button>
      </form>
    </div>
  )
}

export default LoginRegister;