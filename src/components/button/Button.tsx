import { ThemeProvider } from "styled-components"; // Define the interface for the Input component
import { ButtonCss } from "./Button.styled";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonProps {
  placeholder?: string;
  onClick?: () => void;
  variant: "primario" | "secundario";
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
      {placeholder}
    </ButtonCss>
  );
};

//cuando los campos sean obligatorio tengan un color diferente y se si esta validado los campos sean de otro color y se active le boton

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonTheme {}

const buttonPrimario: ButtonTheme = {};

const Button = (props: ButtonProps) => (
  <ThemeProvider theme={buttonPrimario}>
    <Buttonhtml {...props} />
  </ThemeProvider>
);

export default Button;
