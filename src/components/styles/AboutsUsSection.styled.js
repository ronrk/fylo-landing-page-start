import styled from "styled-components";

const AboutUsStyled = styled.section`
  .illustration {
    display: inline-block;
    width: 49%;
    /* height: 100%; */
    margin-left: 1rem;
  }

  .content {
    /* width: 50%; */
  }
  p {
    padding-right: 5rem;
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: var(--moderate-cyan);
    font-size: 1.2rem;

    letter-spacing: 1px;

    &:hover {
      font-weight: bold;
    }
  }
  .link-item {
    border-bottom: 2px solid var(--moderate-cyan);
    img {
    }
  }
`;

export default AboutUsStyled;
