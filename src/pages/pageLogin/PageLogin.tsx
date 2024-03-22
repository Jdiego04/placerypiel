import Button from "../../components/button/Button";
import Nabvar from "../../components/navbar/Nabvar";
import { DivCards } from "./PageLogin.styled";
import logo from "../../assets/logosaborypiel.webp";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { VscEye, VscEyeClosed } from "react-icons/vsc";

export default function PageLogin() {
  const navigate = useNavigate();
  const params = useParams();

  const login = params?.login;
  const register = params?.reg;

  const [change, setChange] = useState(false);
  const [changeConfirm, setChangeConfirm] = useState(false);

  const handleChange = () => {
    setChange(!change);
  };
  const handleChangeConfirm = () => {
    setChangeConfirm(!changeConfirm);
  };

  const handleNavigateRegistro = () => {
    navigate("/registro/true");
  };
  const handleNavigateLogin = () => {
    navigate("/inicio/true");
  };
  return (
    <div>
      <Nabvar showhome={true} />

      <DivCards>
        <div className="login">
          <div className="image">
            <img src={logo} alt="" />
          </div>
          <div className="form">
            {register && (
              <>
                <label htmlFor="name">
                  <p>Nombre completo</p>
                  <input id="name" type="text" />
                </label>
                <label htmlFor="id">
                  <p>Número de identificación</p>
                  <input id="id" type="number" />
                </label>
              </>
            )}
            <label htmlFor="Correo">
              <p>Correo</p>
              <input id="Correo" type="email" />
            </label>
            <label htmlFor="pass">
              <p>Contraseña</p>
              <input id="pass" type={change ? "password" : "text"} />
              <span className="show" onClick={handleChange}>
                {change ? (
                  <>
                    <VscEye title="mostrar" />
                  </>
                ) : (
                  <>
                    <VscEyeClosed title="ocultar" />
                  </>
                )}
              </span>
            </label>
            {register && (
              <label htmlFor="passCon">
                <p>Confirmar contraseña</p>
                <input
                  id="passCon"
                  type={changeConfirm ? "password" : "text"}
                />
                <span className="show" onClick={handleChangeConfirm}>
                  {changeConfirm ? (
                    <>
                      <VscEye title="mostrar" />
                    </>
                  ) : (
                    <>
                      <VscEyeClosed title="ocultar" />
                    </>
                  )}
                </span>
              </label>
            )}
            <Button
              variant="primario"
              placeholder={login ? "Iniciar sesión" : "Registrarse"}
            />
            {register && (
              <Button
                variant="secundario"
                placeholder={"Cancelar"}
                onClick={handleNavigateLogin}
              />
            )}
            {login ? (
              <p className="registro">
                ¿No tienes cuenta?{" "}
                <span onClick={handleNavigateRegistro}>Registrate aquí</span>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </DivCards>
    </div>
  );
}
