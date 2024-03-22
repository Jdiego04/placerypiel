import Nabvar from "../../components/navbar/Nabvar";
import Carrusel from "../../components/carrusel/Carrusel";
import { useState } from "react";

import Card from "../../components/card/Card";
import { GalleryCards, SectionButton, Pagination } from "./PageHome.styled";
import { imagesButton, imagesCard, listImages } from "../../data/enum";

export default function PageHome() {
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 20;
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = listImages.data.slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  const nextPage = () => {
    if (currentPage < listImages.meta.TotalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleclic = () => {
    console.log("clic");
  };
  return (
    <div>
      <Nabvar showhome={true} />
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
        {currentImages.map((image, index) => (
          <Card
            key={index}
            image={image.image}
            price={image.price}
            name={image.name}
            addToCart={handleclic}
          />
        ))}
      </GalleryCards>
      <Pagination>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === listImages.meta.TotalPages}
        >
          Siguiente
        </button>
      </Pagination>
    </div>
  );
}
