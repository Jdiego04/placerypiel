import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--bg-color-blanco);
  color: var(--bg-color-negro);
  z-index: 100;
  box-shadow: 0px 0px 10px var(--color-general-page-3);

  & .navbar-logo img {
    height: 50px; /* Ajustar según el tamaño de tu logo */
    border-radius: 50px;
    cursor: pointer;
  }

  & .navbar-menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 10px;
    justify-content: center;
    justify-items: center;
    align-items: center;

    & li {
      margin-right: 1rem;

      & a {
        color: var(--bg-color-negro);
        text-decoration: none;
        display: flex;
        justify-content: center;
        justify-items: center;
        align-items: center;
        cursor: pointer;
        font-family: "Satisfy", cursive;
        font-weight: 400;
        font-style: normal;

        & span {
          font-size: 30px;
          color: var(--color-general-page-1);

          & svg {
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      }

      & .registro,
      & .iniciar {
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid transparent;
        border-bottom: 1px solid var(--color-general-page-3);

        &:hover {
          cursor: pointer;
          border: 1px solid var(--color-general-page-3);
          /* background: linear-gradient(
            to top,
            var(--color-general-page-2),
            var(--color-general-page-3),
            var(--color-general-page-3),
            var(--color-general-page-4)
          ); */
        }
      }
    }
  }

  .navbar-cart {
    font-size: 30px;
    position: relative;

    cursor: pointer;

    & .count {
      position: relative;
      font-size: 10px;
      background-color: var(--color-general-page-2);
      color: var(--color-blanco);
      padding: 3px 5px;
      border-radius: 50px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .navbar-menu {
      margin-top: 1rem;
      flex-direction: column;
      align-items: center;

      li {
        margin-right: 0;
        margin-bottom: 0.5rem;
      }
    }
  }
`;
