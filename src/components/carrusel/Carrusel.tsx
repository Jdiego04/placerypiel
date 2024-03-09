import { ThemeProvider } from "styled-components"; // Define the interface for the Input component
import { Carruseldiv } from "./Carrusel.styled";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CarruselProps {
  images: string[];
}

// Use the Single Responsibility Principle (SRP)
const Carruselhtml = ({ images }: CarruselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <Carruseldiv>
      <div className="slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </Carruseldiv>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CarruselTheme {}

const carruselPrimario: CarruselTheme = {};

const Carrusel = (props: CarruselProps) => (
  <ThemeProvider theme={carruselPrimario}>
    <Carruselhtml {...props} />
  </ThemeProvider>
);

export default Carrusel;
