import styled from "styled-components";

export const Carddiv = styled.button`
  width: 200px;
  border: none;
  overflow: hidden;
  background-color: transparent;
  & .card-image {
    width: 100%;
    height: auto;
  }

  & .card-content {
    padding: 10px;
    position: relative;

    & .card-name {
      font-size: 14px;
      font-weight: 600;
      text-align: left;
      color: var(--color-general-page-2);
      text-transform: lowercase;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 130px;
      white-space: nowrap;

      &::first-letter {
        text-transform: uppercase;
      }
    }

    & .card-price {
      font-size: 13px;
      font-weight: 400;
      text-align: left;
      color: var(--bg-btn-secundario-page-2);
    }

    & .add-to-cart-button {
      position: absolute;
      background-color: transparent;
      color: var(--bg-btn-secundario-page);
      border: none;
      padding: 0px;
      font-size: 30px;
      right: 10px;
      top: 10px;

      &:hover {
        cursor: pointer;
        color: var(--color-general-page-2);
      }

      & .mas {
        position: absolute;
        font-weight: lighter;
        font-size: 13px;
        transform: translate(-18px, 6.5px);
      }
    }

    & .hover_name {
      display: none;
      width: 200px;
      position: absolute;
      top: -28px;
      text-transform: lowercase;
      background-color: var(--color-general-page-2);
      color: var(--color-blanco);
      font-size: 12px;
      padding: 5px;
      right: 0;

      &::first-letter {
        text-transform: uppercase;
      }
    }

    & .card-name:hover ~ .hover_name {
      display: block;
    }
  }
`;
