import { ThemeProvider } from "styled-components"; // Define the interface for the Input component
import { ButtonCss } from "./Button.styled";
import { FiPlus, FiMinus } from "react-icons/fi";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonProps {
  placeholder?: string;
  onClick?: () => void;
  variant: "primario" | "secundario" | "peligro" | "mas" | "menos";
  disabled?: boolean;
}

// Use the Single Responsibility Principle (SRP)
const Buttonhtml = ({
  placeholder,
  onClick,
  variant,
  disabled,
}: ButtonProps) => {
  return (
    <ButtonCss variant={variant} onClick={onClick} disabled={disabled}>
      {variant == "mas" ? (
        <FiPlus />
      ) : variant == "menos" ? (
        <FiMinus />
      ) : (
        placeholder
      )}
    </ButtonCss>
  );
};

//cuando los campos sean obligatorio tengan un color diferente y se si esta validado los campos sean de otro color y se active le boton

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonTheme {
  color?: string;
  bgColor?: string;
}

const buttonPrimario: ButtonTheme = {
  color: `var(--txt-color-negro)`,
  bgColor: `var(--bg-color-primario-btn)`,
};

const buttonSecundario: ButtonTheme = {
  color: `var(--txt-color-blanco)`,
  bgColor: `var(--bg-color-secundario-btn)`,
};

const buttonPeligro: ButtonTheme = {
  color: `var(--txt-color-blanco)`,
  bgColor: `var(--bg-color-peligro-btn)`,
};
const buttonIcon: ButtonTheme = {
  color: `var(--txt-color-negro)`,
  bgColor: `var(--bg-color-primario-btn)`,
};

const Button = (props: ButtonProps) => (
  <ThemeProvider
    theme={
      props.variant == "primario"
        ? buttonPrimario
        : props.variant == "secundario"
        ? buttonSecundario
        : props.variant == "peligro"
        ? buttonPeligro
        : (props.variant == "mas" || props.variant == "menos") ? buttonIcon : buttonIcon
    }
  >
    <Buttonhtml {...props} />
  </ThemeProvider>
);

export default Button;
