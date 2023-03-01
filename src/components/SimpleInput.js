import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    //nameInputRef.current.value = ""; not ideal manuplation DOM directly!!!
    setEnteredName("");
    setEnteredNameIsTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? "invalid" : "";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameInputClasses}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Please enter a valid name</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
