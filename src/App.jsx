import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import CreateNewAccPage from "./components/CreateNewAccPage/CreateNewAccPage";
import Header from "./components/Header/Header";
import { db } from "./constants/db";

function App() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(true);
  const [newPage, setNewPage] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [newDataPass, setNewDataPass] = useState("");
  const [newAccData, setNewAccData] = useState([]);

  const newLogin = (e) => {
    (setLogin(e.target.value), setErr(true));
  };
  const newPass = (e) => setPass(e.target.value);

  const newFirstName = (e) => setFirstName(e.target.value);
  const newLastName = (e) => setLastName(e.target.value);
  const newMonth = (e) => setMonth(e.target.value);
  const newDay = (e) => setDay(e.target.value);
  const newYear = (e) => setYear(e.target.value);
  const newDataGender = (e) => setGender(e.target.value);
  const newMobileNum = (e) => setMobileNum(e.target.value);
  const newDataPassword = (e) => setNewDataPass(e.target.value);

  const resetNewAccData = () => {
    setFirstName("");
    setLastName("");
    setMonth("");
    setDay("");
    setYear("");
    setMobileNum("");
    setNewDataPass("");
  };

  const addAccData = () => {
    setNewAccData([
      ...newAccData,
      {
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
        month: month,
        day: day,
        year: year,
        gender: gender,
        mobileNum: mobileNum,
        newDataPass: newDataPass,
      },
    ]);
    resetNewAccData();
  };

  const newDb = db.map((newDb) => {
    return newDb.login;
  });

  const resetLoginPass = () => {
    setLogin("");
    setPass("");
  };

  const checkInput = () => {
    if (newDb.includes(login)) {
      setErr(true);
    } else {
      setErr(false);
    }
    resetLoginPass();
  };

  const createNewAccPage = () => {
    setNewPage(!newPage);
  };

  console.log(newAccData);
  return (
    <main className="main">
      <LoginForm
        login={login}
        newLogin={newLogin}
        newPass={newPass}
        pass={pass}
        err={err}
        checkInput={checkInput}
        createNewAccPage={createNewAccPage}
        newPage={newPage}
      />
      <button className="createBtn" onClick={createNewAccPage}>
        Create New Account
      </button>
      {newPage ? (
        <CreateNewAccPage
          firstName={firstName}
          newFirstName={newFirstName}
          lastName={lastName}
          newLastName={newLastName}
          month={month}
          newMonth={newMonth}
          day={day}
          newDay={newDay}
          year={year}
          newYear={newYear}
          addAccData={addAccData}
          gender={gender}
          newDataGender={newDataGender}
          mobileNum={mobileNum}
          newMobileNum={newMobileNum}
          newDataPass={newDataPass}
          newDataPassword={newDataPassword}
        />
      ) : (
        ""
      )}
    </main>
  );
}

export default App;
