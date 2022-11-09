import styled from "styled-components";

const QuoteBoxStyled = styled.div`
  /* background-color: #eee; */
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  width: 50%;
  padding: 2rem;
  margin: 5rem 0;
  color: var(--very-dark-blue);
  font-size: 1.4rem;
  .quote-content {
    width: 100%;
  }
  .icon {
    width: 1.5rem;
    margin-bottom: 2rem;
  }
  .user-photo {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  .user {
    display: flex;
    align-items: center;
    margin-top: 2rem;

    h4 {
      margin: 0;
      font-family: var(--head-font);
    }
  }
  .user-content {
    padding: 0 1rem;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export default QuoteBoxStyled;
