import React from "react";
import Wrapper from "./styles/Navbar.styled";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <Wrapper className="page-80">
      <img src={logo} alt="logo" id="logo" />
      <nav>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
