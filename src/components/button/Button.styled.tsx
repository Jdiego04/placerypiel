import styled from 'styled-components';

export const ButtonCss = styled.button<{ variant: string }>`
  appearance: none;
  border: none;
  margin-top: ${(props) => (props.variant == 'mas' || props.variant == 'menos' ? '0' : '1rem')};
  padding: ${(props) => (props.variant == 'mas' || props.variant == 'menos' ? '5px' : '11px 10px')};
  width: ${(props) => (props.variant == 'mas' || props.variant == 'menos' ? 'auto' : '100%')};
  border-radius: 5px;
  font-size: 15px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bgColor};

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover {
    outline: auto;
    cursor: pointer;
    outline-offset: 3px;
    outline-color: ${(props) => props.theme.bgColor};
  }

  &:disabled {
    cursor: no-drop;
  }
`;
