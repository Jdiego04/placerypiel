import { useState } from "react";
import Nabvar from "../../components/navbar/Nabvar";
import { imagesCard } from "../../data/enum";
import { Section } from "./PageCart.styled";
import { CiCirclePlus, CiCircleMinus, CiTrash } from "react-icons/ci";

export default function PageCart() {
  const [count, setCount] = useState(0);

  const onClickMore = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    if (count < 0 || count == 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <Nabvar showhome={true} />
      <Section>
        <h2>Resumen de tu compra</h2>
        <div className="container">
          <section className="items">
            <div className="item">
              <div className="continerImage">
                <button className="buttonDelete">
                  <CiTrash />
                </button>
                <div className="image">
                  <img src={imagesCard[0]} alt="" />
                </div>
                <div className="containerInfo">
                  <div>
                    <div className="name">ARIADNA TRAJE 2 PIEZAS DE ENCAJE</div>
                    <div className="cantidad">
                      <div className="title_cantidad">Cantidad</div>
                      <div className="container_contador">
                        <button onClick={onClickMinus}>
                          <CiCircleMinus />
                        </button>
                        <input
                          type="number"
                          onChange={(e) => setCount(parseFloat(e.target.value))}
                          value={count}
                        />
                        <button onClick={onClickMore}>
                          <CiCirclePlus />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="subtotal">
                    <div>Subtotal Producto</div>
                    <div>$ 10.000</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="form">
            <section className="subtotal">
              <p>Subtotal</p>
              <p>$10.000</p>
            </section>
            <section className="total">
              <p>Total</p>
              <p>$10.000</p>
            </section>
            <section className="button">
              <button>Proceder a pagar</button>
            </section>
          </section>
        </div>
      </Section>
    </div>
  );
}
