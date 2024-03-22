import styled from "styled-components";

export const ButtonCss = styled.button<{ variant: string }>`
  appearance: none;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;

  border: ${(props) =>
    props.variant == "secundario"
      ? " 1px solid var(--color-general-page-1)"
      : "none"};

  background-color: ${(props) =>
    props.variant == "secundario"
      ? "var(--color-blanco)"
      : "var(--color-general-page-1)"};

  color: ${(props) =>
    props.variant == "secundario"
      ? "var(--color-negro)"
      : "var(--color-blanco)"};

  &:hover {
    background-color: ${(props) =>
      props.variant == "secundario"
        ? "var(--color-blanco)"
        : "var(--color-general-page-2)"};
  }

  &::first-letter {
    text-transform: uppercase;
  }
  &:disabled {
    cursor: no-drop;
  }
`;
