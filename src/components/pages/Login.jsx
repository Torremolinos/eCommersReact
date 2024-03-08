import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import LoginTemplate from "../templates/LoginTemplate";
const Login = () => {
  //Utilizar redirecciones de React Router

  const nav = useNavigate();

  //Manejo del estado de errores

  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(); //Limpiar errores previos en caso de que existan
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    axios
      .post(`${API_URL}/public/login`, data)
      .then((response) => {
        setToken(response.data.data.token); //Guardar el token en el local storage
        nav("/"); //Redireccionar a la página de inicio
      })
      /*si el email es incorrecto*/

      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };

  return (
    <LoginTemplate title="Iniciar Sesión">
      <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <input
                          type="email"
                          placeholder="Correo electrónico"
                          name="email"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          placeholder="Contraseña"
                          name="password"
                          required
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button className="bg-gradient w-full text-white rounded-full">
                          Ingresar
                        </button>
                        <Link className="text-gray-500" to="/registro">
                          ¿Deseas registrarte? Haz clic aquí
                        </Link>
                      </div>
                      {error && (
                        <p className="text-center p-2 bg-red-100 text-red-600">
                          {error?.response?.data?.data}
                        </p>
                      )}
                    </form>
    </LoginTemplate>
  );
};

export default Login;



