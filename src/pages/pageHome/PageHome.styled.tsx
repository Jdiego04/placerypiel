import styled from "styled-components";

export const GalleryCards = styled.section`
  display: grid;
  width: 100%;
  gap: 5px;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(5, 1fr); */
  max-width: 830px;
  margin: auto;
  height: auto;
`;

export const SectionButton = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: var(--color-general-page-4);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  place-content: center;
  gap: 10px;
  padding: 20px;

  & .button-navigate {
    --w-h: 120px;
    width: var(--w-h);
    height: var(--w-h);
    display: grid;
    place-content: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    gap: 10px;

    &:hover {
      filter: drop-shadow(0px 0px 10px var(--color-general-page-2));
    }

    & img {
      object-fit: cover;
      border-radius: 100%;
    }

    & section {
      font-size: 14px;
      font-weight: 600;
      color: var(--bg-btn-secundario-page-2);
      font-family: "Satisfy", cursive;
      font-weight: 400;
      font-style: normal;
    }
  }
`;

export const Pagination = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 20px;

  & button {
    padding: 5px;
    width: 80px;
    border: 1px solid var(--color-general-page-1);
    border-radius: 5px;
    background-color: var(--color-general-page-1);
    color: var(--color-blanco);

    &:disabled {
      color: var(--color-negro-opaco);
      background-color: transparent;
    }

    &:hover {
      cursor: pointer;

      &:disabled {
        cursor: no-drop;
      }
    }
  }
`;
