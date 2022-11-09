import React, { useState } from "react";
import Wrapper from "./styles/HeaderSection.styled";
import img from "../images/illustration-1.svg";

const HeaderSection = () => {
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
    <Wrapper className="page-80">
      <div className="content">
        <h2>All your files in one secure location, accessible anywhere.</h2>
        <p>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        {!valid && (
          <form className="input-control" onSubmit={onSubmit}>
            <input
              required
              type="email"
              placeholder="Enter your email..."
              value={emailEntered}
              onChange={validateEmail}
            />

            <button type="submit" className="btn-block">
              Get Started
            </button>
          </form>
        )}
        {valid && <p className="success">Check your email</p>}
        <p
          className={
            error
              ? "input-error error-red show-error"
              : "input-error error-red "
          }
        >
          Please cheack your mail
        </p>
      </div>
      <img src={img} alt="" />
    </Wrapper>
  );
};

export default HeaderSection;
