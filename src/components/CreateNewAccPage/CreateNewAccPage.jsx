import "./CreateNewAccPage.css";

export default function CreateNewAccPage({
  firstName,
  newFirstName,
  lastName,
  newLastName,
  month,
  newMonth,
  day,
  newDay,
  year,
  newYear,
  addAccData,
  gender,
  newDataGender,
  mobileNum,
  newMobileNum,
  newDataPass,
  newDataPassword,
  createAccCheck,
}) {
  let years = [];
  let days = [];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const genderArr = ["Female", "Male"];

  for (let i = 2026; i >= 1950; i--) {
    years = [...years, i];
  }

  for (let i = 0; i <= 31; i++) {
    days = [...days, i];
  }

  return (
    <div className="createAccContainer">
      <div className="mainCreateContainer">
        <h1>Get started on Facebook</h1>
        <p>
          Create an account to connect with friends, family and communities of
          people who share your interests.
        </p>
        <div className="createInputContainer">
          <fieldset className="fieldset">
            <legend className="inputTitle">Name</legend>
            <input value={firstName} type="text" onChange={newFirstName} />
            <input value={lastName} type="text" onChange={newLastName} />
          </fieldset>
          {createAccCheck ? "" : <p className="errTexts">What's your name?</p>}
          <fieldset className="fieldset">
            <legend className="inputTitle">Birthday</legend>
            <select value={month} name="month" onChange={newMonth}>
              <option>Month</option>
              {months.map((month, idx) => {
                return (
                  <option key={idx} value={month}>
                    {month}
                  </option>
                );
              })}
            </select>
            <select value={day} name="day" onChange={newDay}>
              <option>Day</option>
              {days.map((day, idx) => {
                return (
                  <option key={idx} value={day}>
                    {day}
                  </option>
                );
              })}
            </select>
            <select value={year} name="year" onChange={newYear}>
              <option>Year</option>
              {years.map((year, idx) => {
                return (
                  <option key={idx} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </fieldset>
          {createAccCheck ? (
            ""
          ) : (
            <p className="errTexts">
              Select your birthday. You can change who can see this later.
            </p>
          )}
          <fieldset className="fieldset">
            <legend className="inputTitle">Gender</legend>
            <select value={gender} name="gender" onChange={newDataGender}>
              <option value={gender}>Gender</option>
              {genderArr.map((gen, idx) => {
                return (
                  <option key={idx} value={gender}>
                    {gen}
                  </option>
                );
              })}
            </select>
          </fieldset>
          {createAccCheck ? (
            ""
          ) : (
            <p className="errTexts">
              Please choose a gender. You can change who can see this later.
            </p>
          )}

          <fieldset className="fieldset">
            <option value={gender}>Mobile number or email</option>
            <input value={mobileNum} type="text" onChange={newMobileNum} />
          </fieldset>
          <fieldset className="fieldset">
            <option value={gender}>Password</option>
            <input value={newDataPass} type="text" onChange={newDataPassword} />
          </fieldset>
          <button
            onClick={() => {
              addAccData();
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
