import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <div classname="loginWrapper">
        <div className="loginLeft">
        
          <h3 className="loginLogo">Lamasocial</h3>
          <span>
            Connect with friends and the world around you.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginOutput"></input>
            <input placeholder="Password" className="loginOutput"></input>
            <button className="loginButton">Log in</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">
              Create a new account 
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}
