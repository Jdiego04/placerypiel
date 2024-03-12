import Nabvar from "../../components/navbar/Nabvar";
import Carrusel from "../../components/carrusel/Carrusel";

import Card from "../../components/card/Card";
import { GalleryCards, SectionButton } from "./PageHome.styled";
import { imagesButton, imagesCard } from "../../data/enum";

export default function PageHome() {
  const handleclic = () => {
    console.log("clic");
  };
  return (
    <div>
      <Nabvar />
      <div style={{ marginTop: "50px" }}>
        <Carrusel images={imagesCard}></Carrusel>
      </div>
      <SectionButton>
        {imagesButton.data.map(({ image, name }) => (
          <div className="button-navigate">
            <div>
              <img src={image} alt="" />
            </div>
            <section>{name}</section>
          </div>
        ))}
      </SectionButton>
      <GalleryCards>
        <Card
          image={imagesCard[0]}
          price={10000}
          name="ARIADNA TRAJE 2 PIEZAS DE ENCAJE"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[1]}
          price={30000}
          name="Kit mariposa"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[2]}
          price={60000}
          name="BALA VIBRADOR ESTIMULATE"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[3]}
          price={80000}
          name="Éxtasis - Juego de Mesa"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[4]}
          price={90000}
          name="PEZONERAS GARGANTILLA F09"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[0]}
          price={10000}
          name="ARIADNA TRAJE 2 PIEZAS DE ENCAJE"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[1]}
          price={30000}
          name="Kit mariposa"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[2]}
          price={60000}
          name="BALA VIBRADOR ESTIMULATE"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[3]}
          price={80000}
          name="Éxtasis - Juego de Mesa"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[4]}
          price={90000}
          name="PEZONERAS GARGANTILLA F09"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[0]}
          price={10000}
          name="ARIADNA TRAJE 2 PIEZAS DE ENCAJE"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[1]}
          price={30000}
          name="Kit mariposa"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[2]}
          price={60000}
          name="BALA VIBRADOR ESTIMULATE"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[3]}
          price={80000}
          name="Éxtasis - Juego de Mesa"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[4]}
          price={90000}
          name="PEZONERAS GARGANTILLA F09"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[0]}
          price={10000}
          name="ARIADNA TRAJE 2 PIEZAS DE ENCAJE"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[1]}
          price={30000}
          name="Kit mariposa"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[2]}
          price={60000}
          name="BALA VIBRADOR ESTIMULATE"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[3]}
          price={80000}
          name="Éxtasis - Juego de Mesa"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[4]}
          price={90000}
          name="PEZONERAS GARGANTILLA F09"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[0]}
          price={10000}
          name="ARIADNA TRAJE 2 PIEZAS DE ENCAJE"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[1]}
          price={30000}
          name="Kit mariposa"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[2]}
          price={60000}
          name="BALA VIBRADOR ESTIMULATE"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[3]}
          price={80000}
          name="Éxtasis - Juego de Mesa"
          addToCart={handleclic}
        />
        <Card
          image={imagesCard[4]}
          price={90000}
          name="PEZONERAS GARGANTILLA F09"
          addToCart={handleclic}
        />
      </GalleryCards>
    </div>
  );
}
