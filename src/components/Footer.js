import React from "react";
import Wrapper from "./styles/Footer.styled";
import { ReactComponent as Logo } from "../images/logo2.svg";
import phoneIcon from "../images/icon-phone.svg";
import emailIcon from "../images/icon-email.svg";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  let iconStyles = {
    fill: "hsl(0, 0%, 75%)",
    fontSize: "2rem",
    margin: ".5rem",
    cursor: "pointer",
  };
  return (
    <Wrapper>
      <div className="company">
        <Logo style={{ fill: "blue" }} />
        <div className="company__item">
          <img src={phoneIcon} alt="phone-icone" />{" "}
          <span>Phone: +1-543-123-4567</span>
        </div>
        <div className="company__item">
          <img src={emailIcon} alt="email-icone" />{" "}
          <span>example@fylo.com</span>
        </div>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>
      </div>
      <div className="social-icon">
        <BsFacebook style={iconStyles} />
        <BsTwitter style={iconStyles} />
        <BsInstagram style={iconStyles} />
      </div>
    </Wrapper>
  );
};

export default Footer;
