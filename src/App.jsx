import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { db } from "./constants/db";

function App() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(true);
  const [newPage, setNewPage] = useState(false);

  const newLogin = (e) => setLogin(e.target.value);
  const newPass = (e) => setPass(e.target.value);

  const newDb = db.map((newDb) => {
    return newDb.login;
  });

  const checkInput = () => {
    if (newDb.includes(login)) {
      setErr(true);
    } else {
      setErr(false);
    }
    setLogin("");
    setPass("");
  };

  return (
    <>
      <input
        className={err ? "" : "err"}
        value={login}
        type="text"
        onChange={newLogin}
      />
      <input
        value={pass}
        type="password"
        onChange={newPass}
      />
      <button onClick={checkInput}>+</button>
      {err ? "" : <p>Please Create New Account</p>}
      <button onClick={() => setNewPage(!newPage)}>Create New Account</button>
      {newPage ? (
        <div>
          <p>hello</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
