import { ThemeProvider } from "styled-components"; // Define the interface for the Input component
import { Nav } from "./Navbar.styled";
import { CiShoppingCart } from "react-icons/ci";
import logo from "../../assets/logosaborypiel.webp";
import { useNavigate } from "react-router-dom";
import { BiHomeHeart } from "react-icons/bi";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NabvarProps {
  showhome?: boolean;
}

// Use the Single Responsibility Principle (SRP)
const Nabvarhtml = ({ showhome = false }: NabvarProps) => {
  const navigate = useNavigate();

  const handleNavigateCart = () => {
    navigate("/cart");
  };
  const handleNavigateHome = () => {
    navigate("/");
  };
  return (
    <Nav>
      <div className="navbar-logo" onClick={handleNavigateHome}>
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li>
          {showhome && (
            <a href="#">
              <span>
                <BiHomeHeart />
              </span>
              Inicio
            </a>
          )}
        </li>
      </ul>
      <div className="navbar-cart">
        <span onClick={handleNavigateCart}>
          <CiShoppingCart />
          <span className="count">0</span>
        </span>
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
