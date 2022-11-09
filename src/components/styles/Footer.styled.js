import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: var(--very-dark-blue);
  display: flex;
  /* height: 30vh; */
  padding: 4rem 2rem;
  justify-content: space-around;

  .company__item {
    color: var(--light-gray);
    letter-spacing: 1px;
    margin: 1rem;
    font-size: 1.2rem;
    & img {
      width: 1.5rem;
      margin-right: 1rem;
    }
  }

  .links {
    & ul {
      list-style: none;
      & li {
        padding: 1rem;
      }

      & li a {
        text-decoration: none;
        color: var(--light-gray);
        font-size: 1.2rem;
      }
    }
  }
`;

export default FooterStyled;
