import styled from "styled-components";

export const CatWrapper = styled.div`
  /* background-color: white; */
  width: 100%;
  margin: auto;
  .container {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 20px auto; */
    gap: 10px;
    button {
      width: 180px;
      font-size: 18px;
      padding: 5px 10px;
      border: 0;
      background-color: #176b87;
      color: white;
      border-radius: 4px;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      &:hover {
        background-color: rgba(3, 180, 168, 1);
        color: white;
      }
    }
    .selected {
      background-color: rgba(3, 180, 168, 1);
    }
  }
`;
