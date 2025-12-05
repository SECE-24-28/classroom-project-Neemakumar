import styled from "styled-components";

export const OurPromisesStyle = styled.div`
  * {
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .main {
    padding-block: 50px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1800px;
    margin: 1rem auto;
    border-radius: 10px;
  }

  .t1 {
    text-align: center;
    margin-bottom: 50px;
  }

  .title {
    font-weight: 600;
    font-size: 48px;
    font-family: "Work Sans", sans-serif;
  }

  .para {
    font-size: 18px;
    text-align: center;
    margin-block: 8px;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    color: rgb(86, 102, 131);
  }

  .child {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .element__item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 380px;
    border-radius: 0 0 10px 10px;
    padding: 1.5rem;
    background-color: rgb(255, 255, 255);
    position: relative;
    border-top: 4px solid;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 17px;
  }

  .item__title {
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: rgb(119, 119, 119);
  }

  .element__content {
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: rgb(86, 102, 131);
  }
`;
