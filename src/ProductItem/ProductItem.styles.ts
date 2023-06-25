import styled from "styled-components";

export const ProductItemWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 280px;
  /* gap: 16px; */
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px;
  font-family: Helvetica, sans-serif;
  background: rgb(22, 75, 96, 0.8);
  .container {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.99);
    /* width: 280px; */
    gap: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    /* padding: 10px; */
    width: 100%;
    /* margin: 10px; */
    img {
      /* width: 120px; */
      max-height: 100px;
      margin: auto;
      object-fit: cover;
      padding: 8px;
    }
    .content {
      width: 100%;
      /* margin: 10px; */
      padding: 0 10px;
      margin: auto;

      /* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2); */
      border-radius: 8px;
      h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 16px;
        min-height: 60px;
        font-weight: 400;
        font-family: "Poppins", sans-serif;
      }
      h3 {
        font-weight: 600;
        font-size: 22px;
        text-align: center;
        color: rgba(0, 0, 0, 0.8);
        /* background-color: rgb(194, 222, 220); */
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 0px 1px rgba(0, 0, 0, 0.2);
        padding: 4px;
        /* color: white; */
        /* width: 100%; */
        /* padding: 10px; */
      }
      p {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.7);
      }
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 6px;
      padding: 8px 20px;
      margin: 10px 0;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(0, 0, 0, 0.2);
      cursor: pointer;
      &:hover {
        background-color: black;
        color: white;
      }
    }
    .inner-modal {
      position: absolute;
      top: 0%;
      left: 0%;
      /* transform: translate(-50%, -50%); */
      /* max-width: 900px; */
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      .inner-inner {
        position: relative;
        background-color: white;
        max-width: 900px;
        .close {
          color: rgba(0, 0, 0, 0.4);
          cursor: pointer;
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 32px;
        }
        padding: 20px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
      }
    }

    button {
      font-size: 18px;
      width: 80%;
      padding: 10px;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
      border: none;
      margin: 0 auto 20px;

      background-color: #176b87;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
`;
