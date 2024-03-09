import React from "react";
import Nabvar from "../../components/navbar/Nabvar";
import Carrusel from "../../components/carrusel/Carrusel";
import imagen1 from "../../assets/imagen1.webp";
import imagen2 from "../../assets/imagen2.webp";
import imagen3 from "../../assets/imagen3.webp";
import imagen4 from "../../assets/imagen4.webp";
import imagen5 from "../../assets/imagen5.webp";
import imagen11 from "../../assets/imagen11.webp";
import imagen22 from "../../assets/imagen22.webp";
import imagen33 from "../../assets/imagen33.webp";
import imagen44 from "../../assets/imagen44.webp";
import imagen55 from "../../assets/imagen55.webp";
import imagen66 from "../../assets/imagen66.webp";
import imagen77 from "../../assets/imagen77.webp";
import imagen88 from "../../assets/imagen88.webp";
import Card from "../../components/card/Card";
import { GalleryCards } from "./PageHome.styled";

export default function PageHome() {
  const images = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    // Agrega más imágenes aquí según sea necesario
  ];
  const images2 = [
    imagen11,
    imagen22,
    imagen33,
    imagen44,
    imagen55,
    imagen66,
    imagen77,
    imagen88,
    // Agrega más imágenes aquí según sea necesario
  ];
  const handleclic = () => {
    console.log("clic");
  };
  return (
    <div>
      <Nabvar></Nabvar>
      <div style={{ marginTop: "50px" }}>
        <Carrusel images={images}></Carrusel>
      </div>
      <GalleryCards>
        <Card
          image={imagen1}
          price={10000}
          name="ARIADNA TRAJE 2 PIEZAS DE ENCAJE"
          addToCart={handleclic}
        />
        <Card
          image={imagen2}
          price={30000}
          name="Kit mariposa"
          addToCart={handleclic}
        />
        <Card
          image={imagen3}
          price={60000}
          name="BALA VIBRADOR ESTIMULATE"
          addToCart={handleclic}
        />
        <Card
          image={imagen4}
          price={80000}
          name="Éxtasis - Juego de Mesa"
          addToCart={handleclic}
        />
        <Card
          image={imagen5}
          price={90000}
          name="PEZONERAS GARGANTILLA F09"
          addToCart={handleclic}
        />
        <Card
          image={imagen1}
          price={10000}
          name="ARIADNA TRAJE 2 PIEZAS DE ENCAJE"
          addToCart={handleclic}
        />
        <Card
          image={imagen2}
          price={30000}
          name="Kit mariposa"
          addToCart={handleclic}
        />
        <Card
          image={imagen3}
          price={60000}
          name="BALA VIBRADOR ESTIMULATE"
          addToCart={handleclic}
        />
        <Card
          image={imagen4}
          price={80000}
          name="Éxtasis - Juego de Mesa"
          addToCart={handleclic}
        />
        <Card
          image={imagen5}
          price={90000}
          name="PEZONERAS GARGANTILLA F09"
          addToCart={handleclic}
        />
        <Card
          image={imagen1}
          price={10000}
          name="ARIADNA TRAJE 2 PIEZAS DE ENCAJE"
          addToCart={handleclic}
        />
        <Card
          image={imagen2}
          price={30000}
          name="Kit mariposa"
          addToCart={handleclic}
        />
        <Card
          image={imagen3}
          price={60000}
          name="BALA VIBRADOR ESTIMULATE"
          addToCart={handleclic}
        />
        <Card
          image={imagen4}
          price={80000}
          name="Éxtasis - Juego de Mesa"
          addToCart={handleclic}
        />
        <Card
          image={imagen5}
          price={90000}
          name="PEZONERAS GARGANTILLA F09"
          addToCart={handleclic}
        />
        <Card
          image={imagen1}
          price={10000}
          name="ARIADNA TRAJE 2 PIEZAS DE ENCAJE"
          addToCart={handleclic}
        />
        <Card
          image={imagen2}
          price={30000}
          name="Kit mariposa"
          addToCart={handleclic}
        />
        <Card
          image={imagen3}
          price={60000}
          name="BALA VIBRADOR ESTIMULATE"
          addToCart={handleclic}
        />
        <Card
          image={imagen4}
          price={80000}
          name="Éxtasis - Juego de Mesa"
          addToCart={handleclic}
        />
        <Card
          image={imagen5}
          price={90000}
          name="PEZONERAS GARGANTILLA F09"
          addToCart={handleclic}
        />
        <Card
          image={imagen1}
          price={10000}
          name="ARIADNA TRAJE 2 PIEZAS DE ENCAJE"
          addToCart={handleclic}
        />
        <Card
          image={imagen2}
          price={30000}
          name="Kit mariposa"
          addToCart={handleclic}
        />
        <Card
          image={imagen3}
          price={60000}
          name="BALA VIBRADOR ESTIMULATE"
          addToCart={handleclic}
        />
        <Card
          image={imagen4}
          price={80000}
          name="Éxtasis - Juego de Mesa"
          addToCart={handleclic}
        />
        <Card
          image={imagen5}
          price={90000}
          name="PEZONERAS GARGANTILLA F09"
          addToCart={handleclic}
        />
      </GalleryCards>
    </div>
  );
}
