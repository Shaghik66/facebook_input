import "./LoginForm.css";


export default function LoginForm({
  err,
  login,
  newLogin,
  pass,
  newPass,
  checkInput,
}) {
  return (
    <div>
      <input
        className={err ? "" : "err"}
        value={login}
        type="text"
        onChange={newLogin}
      />
      <input value={pass} type="password" onChange={newPass} />
      <button onClick={checkInput}>+</button>
      {err ? "" : <p>Please Create New Account</p>}
      
    </div>
  );
}
