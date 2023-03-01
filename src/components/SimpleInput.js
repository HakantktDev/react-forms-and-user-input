import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);

    //nameInputRef.current.value = ""; !not ideal manuplation DOM directly
    setEnteredName("");
  };
  const nameInputClasses = enteredNameIsValid ? "" : "invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameInputClasses}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameInputChangeHandler} ref={nameInputRef} value={enteredName} />
        {!enteredNameIsValid && <p className="error-text">Please enter a valid name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
