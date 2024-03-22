import styled from "styled-components";

export const DivCards = styled.section`
  width: 100%;
  display: grid;
  place-content: center;
  margin-top: 100px;

  & .login {
    width: 350px;
    /* overflow: hidden; */
    display: grid;
    /* place-content: center; */
    border-radius: 10px;
    border: 1px solid var(--color-general-page-3);
    position: relative;
    padding: 50px 10px 30px 10px;

    & .image {
      position: absolute;
      width: 110px;
      height: 110px;
      overflow: hidden;
      border-radius: 50%;
      left: 50%;
      top: -70px;
      transform: translate(-50%, 0);
      z-index: 10;
      border: 10px solid var(--color-blanco);

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    & .form {
      display: grid;
      /* place-content: center; */
      gap: 20px;
      width: 100%;

      & label {
        display: grid;
        gap: 5px;
        width: 100%;
        position: relative;

        & p {
          font-size: 13px;
        }

        & #pass,
        & #passCon {
          padding: 10px 40px 10px 5px;
        }

        & input {
          appearance: none;
          border: none;
          border: 1px solid var(--color-general-page-3);
          width: 100%;
          padding: 10px 5px;
          border-radius: 5px;

          &:focus {
            outline: 1px solid var(--color-general-page-3);
          }
        }

        & .show {
          position: absolute;
          right: 10px;
          top: 34px;

          &:hover {
            cursor: pointer;
          }
        }
      }

      & .registro {
        text-align: center;
        width: 100%;

        & span {
          color: var(--color-azul-txt);
          text-decoration: underline;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;
