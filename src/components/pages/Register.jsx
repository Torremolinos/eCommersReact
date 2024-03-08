import axios from "axios";
import { API_URL } from "../../constants/env";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginTemplate from "../templates/LoginTemplate";
const Register = () => {
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
      details:{
        fullname: e.target.fullname.value,
      }
    };
    axios
      .post(`${API_URL}/public/users`, data)
      .then((response) => {
        setToken(response.data.data.token); //Guardar el token en el local storage
        nav("/login"); //Redireccionar a la página de inicio
      })
      /*si el email es incorrecto*/

      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };

  return (
    <LoginTemplate title="Registrate">
      <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <input
                          type="text"
                          placeholder="Nombre completo"
                          name="fullname"
                          required
                        />
                      </div>
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
                             Crear cuenta
                        </button>
                        <Link className="text-gray-500" to="/login">
                          ¿Ya tienes cuenta? Haz clic aquí
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

export default Register;



