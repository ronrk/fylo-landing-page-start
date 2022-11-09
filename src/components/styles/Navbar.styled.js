import styled from "styled-components";

const NavbarStyled = styled.header`
  display: flex;
  justify-content: space-between;

  img {
    width: 15rem;
  }

  & ul {
    list-style: none;
    display: flex;
    & li {
      margin-right: 8rem;
      font-size: 1.8rem;

      & a {
        color: var(--vart-dark-blue);
        text-decoration: none;
      }
    }
    & li:last-of-type {
      margin-right: 0;
    }
  }

  @media screen and(max-width:650px) {
    & ul {
    }
    & li {
      margin-right: 3rem;
    }
  }
`;

export default NavbarStyled;
