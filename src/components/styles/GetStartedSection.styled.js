import styled from "styled-components";

const GetStartedStyled = styled.div`
  background-color: var(--desaturated-blue);
  /* width: 100%; */
  padding: 2rem 10rem;
  display: flex;
  align-items: center;

  color: var(--light-grayish-blue);
  .content {
    /* width: 40%; */
  }
  h3 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.2rem;
    padding: 0 20rem 0 0;
    color: var(--light-grayish-blue);
  }

  .input-control {
    width: 45%;
    input {
      width: 60%;
      padding: 1rem;
      margin-bottom: 1rem;
    }
    button {
      display: block;
    }
  }

  .success {
    display: inline;
    padding: 2rem;
    color: var(--moderate-cyan);
    background-color: var(--very-dark-blue);
  }

  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
    p {
      padding: 0;
    }
    .input-control {
      width: 100%;
    }
  }
`;

export default GetStartedStyled;
