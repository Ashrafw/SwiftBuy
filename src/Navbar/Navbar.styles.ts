import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: white;
  .container {
    max-width: 1240px;
    margin: auto;
    padding: 20px 0;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    /* gap: 30px; */
    .logo {
      font-size: 34px;
      font-weight: 700;
      color: rgb(22, 75, 96);
    }
    .right {
      font-size: 32px;
      position: relative;
      color: rgb(22, 75, 96);
      .amount {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
        font-size: 16px;
        width: 25px;
        height: 25px;
        border-radius: 50px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: 600;
      }
    }
  }
`;
