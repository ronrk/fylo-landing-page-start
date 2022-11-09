import React from "react";
import QuoteBox from "./QuoteBox";
import Wrapper from "./styles/AboutsUsSection.styled";
import arrowIcon from "../images/icon-arrow.svg";
import img from "../images/illustration-2.svg";

const AboutUsSection = () => {
  return (
    <Wrapper className="page-80">
      <div className="content">
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required!
        </p>
        <span className="link-item">
          <a href="#">
            See how Fylo works <img src={arrowIcon} alt="" />
          </a>
        </span>
        <QuoteBox />
      </div>
      <img src={img} alt="" className="illustration" />
    </Wrapper>
  );
};

export default AboutUsSection;
