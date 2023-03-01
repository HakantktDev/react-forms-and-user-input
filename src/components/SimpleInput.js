import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);

    //nameInputRef.current.value = ""; not ideal manuplation DOM directly!!!
    setEnteredName("");
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

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
          ref={nameInputRef}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Please enter a valid name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
