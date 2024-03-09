import { ThemeProvider } from "styled-components"; // Define the interface for the Input component
import { Nav } from "./Navbar.styled";
import { CiShoppingCart } from "react-icons/ci";
import logo from "../../assets/logosaborypiel.webp";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NabvarProps {}

// Use the Single Responsibility Principle (SRP)
const Nabvarhtml = ({}: NabvarProps) => {
  return (
    <Nav>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="#">Opción 1</a>
        </li>
        <li>
          <a href="#">Opción 2</a>
        </li>
        <li>
          <a href="#">Opción 3</a>
        </li>
      </ul>
      <div className="navbar-cart">
        <CiShoppingCart />
        <span className="count">0</span>
      </div>
    </Nav>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NabvarTheme {}

const nabvarPrimario: NabvarTheme = {};

const Nabvar = (props: NabvarProps) => (
  <ThemeProvider theme={nabvarPrimario}>
    <Nabvarhtml {...props} />
  </ThemeProvider>
);

export default Nabvar;
