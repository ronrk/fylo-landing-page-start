import styled from "styled-components";

const HeaderSectionStyled = styled.section`
  img {
    display: inline-block;
    width: 50%;
    /* height: 100%; */
    margin-left: 1rem;
  }

  .input-control {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    input {
      /* width: 60%; */
      flex: 2;
      padding-left: 2rem;
      color: var(--very-dark-blue);
      font-family: var(--main-font);
      &::placeholder {
        opacity: 0.8;
        color: var(--light-gray);
      }
    }
  }
  p {
    margin-bottom: 5rem;
  }
  .success {
    display: inline;
    padding: 2rem;
    color: var(--moderate-cyan);
    background-color: var(--very-dark-blue);
  }
`;

export default HeaderSectionStyled;

// button {
//   display: inline-block;
//   /* width: 30%; */
//   flex: 0.5;
//   font-size: 1.6rem;
//   color: var(--light-grayish-blue);
//   background-color: var(--bright-blue);
//   padding: 1rem 4rem;
//   border: none;
// }
