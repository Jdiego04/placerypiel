import styled from "styled-components";

export const GalleryCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
  justify-content: center;
  margin-top: 100px;
`;

export const SectionButton = styled.section`
  margin-top: 100px;
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
      font-size: 13px;
      font-weight: 600;
      color: var(--bg-btn-secundario-page-2);
    }
  }
`;
