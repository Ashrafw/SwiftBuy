import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: white;
  .container {
    max-width: 1240px;
    margin: auto;
    padding: 10px 0;
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
  }
`;
