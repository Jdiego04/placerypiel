import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 30px;

  & h2 {
    text-align: center;
    padding: 30px;
    font-weight: 600;
  }

  & .container {
    display: grid;
    gap: 20px;
    grid-template-columns: 70% 30%;
    padding: 10px;

    & .items {
      width: 100%;
      border-radius: 10px;
      border: 1px solid var(--color-general-page-3);
      overflow-x: hidden;
      overflow-y: auto;
      height: 500px;
      padding: 10px;
      display: grid;
      gap: 10px;

      & .item {
        width: 100%;
        display: grid;
        border-bottom: 1px solid var(--color-general-page-2);
        height: 250px;
        align-items: center;

        & .continerImage {
          width: 100%;
          display: grid;
          grid-template-columns: 35% 55%;
          gap: 20px;
          position: relative;

          & .buttonDelete {
            --color: var(--color-general-page-2);
            position: absolute;
            appearance: none;
            border: 1px solid var(--color-general-page-2);
            display: flex;
            font-size: 30px;
            top: 10px;
            right: 10px;
            border-radius: 5px;
            background-color: var(--color-blanco);
            color: var(--color-general-page-1);
            cursor: pointer;
            /* box-shadow: 0px 0px 10px var(--color); */

            &:hover {
              box-shadow: 0px 0px 10px var(--color);
            }
          }

          & .image {
            img {
              width: 200px;
            }
          }

          & .containerInfo {
            display: grid;
            height: auto;
            align-content: space-around;

            & .name {
              width: 100%;
              color: var(--color-general-page-1);
              font-weight: 600;
            }

            & .cantidad {
              width: 100%;
              padding: 10px 0;

              & .title_cantidad {
                width: 100%;
                color: var(--bg-btn-secundario-page);
                padding-bottom: 5px;
              }

              & .container_contador {
                width: 100%;
                display: flex;
                gap: 10px;

                & button {
                  background-color: transparent;
                  border: none;
                  text-align: center;
                  font-size: 24px;
                  cursor: pointer;
                  color: var(--bg-btn-secundario-page-2);
                }

                & input {
                  appearance: none;
                  border: 1px solid var(--bg-btn-secundario-page-2);
                  border-radius: 5px;
                  outline: none;
                  padding: 0 10px;
                  width: 50px;
                  text-align: center;
                  font-size: 16px;

                  &::-webkit-inner-spin-button,
                  &::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                  }
                }
              }
            }
            & .subtotal {
              text-align: right;

              & div:first-child {
                font-weight: 600;
              }
              & div:last-child {
                color: var(--bg-btn-secundario-page-2);
              }
            }
          }
        }
      }
    }

    & .form {
      width: 100%;
      border-radius: 10px;
      border: 1px solid var(--color-general-page-3);
      overflow: auto;
      padding: 10px;
      height: 500px;

      & .total,
      & .subtotal {
        width: 100%;
        padding: 10px;
        display: grid;
        gap: 5px;

        & p:first-child {
          font-size: 20px;
          font-weight: 600;
        }
        & p:last-child {
          color: var(--bg-btn-secundario-page-2);
        }
      }

      & .subtotal {
        border-bottom: 1px solid var(--color-general-page-3);
      }

      & .button {
        width: 100%;
        padding: 10px;

        & button {
          appearance: none;
          width: 100%;
          padding: 10px;
          border: none;
          background-color: var(--color-general-page-1);
          cursor: pointer;
          color: var(--color-blanco);
          font-size: 18px;
          border-radius: 5px;

          &:hover {
            background-color: var(--color-general-page-2);
          }
        }
      }
    }
  }

  @media screen and (max-width: 750px) {
    & .container {
      grid-template-columns: 100%;
    }
  }
`;
