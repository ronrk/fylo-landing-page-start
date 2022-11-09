import React, { useState } from "react";
import Wrapper from "./styles/GetStartedSection.styled";

const GetStartedSection = () => {
  const [emailEntered, setEmailEntered] = useState("");
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

  const validateEmail = (e) => {
    setEmailEntered(e.target.value);
    if (emailEntered === "" || !emailEntered.includes("@")) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValid(true);
  };
  return (
    <Wrapper>
      <div className="content">
        <h3>Get early access today</h3>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      {!valid && (
        <form className="input-control" onSubmit={onSubmit}>
          <input
            required
            className="input-block"
            type="email"
            placeholder="email@example.com"
            onChange={validateEmail}
            value={emailEntered}
          />
          <button type="submit" className="btn-block">
            Get Started For Free
          </button>
          <p className="input-error">Please check your input</p>
        </form>
      )}
      {valid && <p className="success">Check your email</p>}
    </Wrapper>
  );
};

export default GetStartedSection;
