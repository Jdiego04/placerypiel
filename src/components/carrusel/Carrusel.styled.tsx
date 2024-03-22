import styled from "styled-components";

export const Carruseldiv = styled.nav`
  position: relative;
  max-width: 1024px;
  margin: 0 auto;

  .slide {
    display: block;
    text-align: center;
  }

  .slide img {
    max-width: 100%;
    height: auto;
  }

  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    /* background-color: var(--color-general-page-3); */
    color: var(--color-general-page-2);
    border: none;
    cursor: pointer;
    padding: 0 10px;
    font-size: 18px;
    height: 30px;
    border-radius: 50px;
    &:hover {
      color: var(--color-blanco);
      background-color: var(--color-general-page-1);
    }
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }
`;
