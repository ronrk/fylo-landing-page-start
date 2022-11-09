import React from "react";
import Wrapper from "./styles/QuoteBox.styled";
import quoteImg from "../images/icon-quotes.svg";
import profileImg from "../images/avatar-testimonial.jpg";

const QuoteBox = () => {
  return (
    <Wrapper>
      <img src={quoteImg} className="icon" alt="" />
      <div className="content quote-content">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </div>
      <div className="user">
        <div className="user-img">
          <img src={profileImg} className="user-photo" alt="" />
        </div>
        <div className="user-content">
          <h4>Kyle Burton</h4>
          <span>Founder & CEO, Huddle</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default QuoteBox;
