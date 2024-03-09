import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--bg-color-blanco);
  color: var(--bg-color-negro);

  & .navbar-logo img {
    height: 50px; /* Ajustar según el tamaño de tu logo */
    border-radius: 50px;
  }

  & .navbar-menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    & li {
      margin-right: 1rem;
      & a {
        color: var(--bg-color-negro);
        text-decoration: none;
      }
    }
  }

  .navbar-cart {
    font-size: 30px;
    position: relative;

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
