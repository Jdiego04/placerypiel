import { ThemeProvider } from "styled-components"; // Define the interface for the Input component
import { Carddiv } from "./Card.styled";
import { CiShoppingCart } from "react-icons/ci";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CardProps {
  image: string;
  price: string | number;
  name: string;
  addToCart: () => void;
}

// Use the Single Responsibility Principle (SRP)
const Cardhtml = ({ image, price, name, addToCart }: CardProps) => {
  return (
    <Carddiv>
      <img src={image} alt="Product" className="card-image" />
      <div className="card-content">
        <section className="card-name">{name}</section>
        <section className="card-price">${price}</section>
        <button className="add-to-cart-button" onClick={addToCart}>
          <CiShoppingCart />
          <span className="mas">+</span>
        </button>
        <section className="hover_name">{name}</section>
      </div>
    </Carddiv>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CardTheme {}

const cardPrimario: CardTheme = {};

const Card = (props: CardProps) => (
  <ThemeProvider theme={cardPrimario}>
    <Cardhtml {...props} />
  </ThemeProvider>
);

export default Card;
