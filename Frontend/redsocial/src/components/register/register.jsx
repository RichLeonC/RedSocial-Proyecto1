import "./Register.css"

export default function Register() {
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
            <input placeholder="Username" className="loginOutput"></input>
            <input placeholder="Email" className="loginOutput"></input>
            <input placeholder="Password" className="loginOutput"></input>
            <input placeholder="Confirm password" className="loginOutput"></input>
            <button className="loginButton">Sign up</button>
            <button className="loginRegisterButton">
              Log into account
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}
