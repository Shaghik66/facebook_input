import "./LoginForm.css";

export default function LoginForm({
  err,
  login,
  newLogin,
  pass,
  newPass,
  checkInput,
  createNewAccPage,
}) {
  return (
    <div className="mainContainer">
      <div className="mainLeftContainer">
        <img className="logo" src="./logos/facebook-logo.webp" alt="" />
        <h1 className="mainParagraph">
          Explore the <br /> things <br />
          <span className="paragraphSpan">you love</span>.
        </h1>
        <img className="image" src="./images/image.png" alt="" />
      </div>
      <div className="rightContainer">
        <h2 className="rightContainerTitle">Log into Facebook</h2>
        <input
        placeholder="Email or mobile number"
          className={`inputLogin ${err ? "" : "err"}`}
          value={login}
          type="text"
          onChange={newLogin}
        />
        {err ? "" : <p className="errText">The email or mobile number you entered isn’t connected to an account.</p>}
        <input placeholder="Password" className="inputPass" value={pass} type="password" onChange={newPass} />
        <button className="loginBtn" onClick={checkInput}>Log in</button>
        
        <button className="createBtn" onClick={createNewAccPage}>
          Create New Account
        </button>
      </div>
    </div>
  );
}
