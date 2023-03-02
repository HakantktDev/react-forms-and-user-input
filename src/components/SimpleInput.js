import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    resetNameInput();
    resetEmailInput();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
  };

  const nameInputClasses = nameInputHasError ? "invalid" : "";

  const emailInputClasses = emailInputHasError ? "invalid" : "";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameInputClasses}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameChangedHandler} onBlur={nameBlurHandler} value={enteredName} />
        {nameInputHasError && <p className="error-text">Please enter a valid name</p>}
      </div>
      <div className={`form-control ${emailInputClasses}`}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {emailInputHasError && <p className="error-text">Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
