import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../../assets/imgs/logo3.svg";
import { useState } from "react";
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
      .catch((err) => console.log(err));
  };

  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="container m-auto py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48 mb-4 pt-4"
                        src={logoImage}
                        alt="logo"
                      />
                      <h4 className="text-xl font-semibold mt-1 mb-8 pb-1 ">
                        Iniciar sesión
                      </h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <input 
                            type="email"
                            placeholder="Correo electrónico"
                            name="email"
                            required />
                      </div>
                      <div className="mb-4">
                        <input 
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            required />
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
                  </div>
                </div>
              
                  <div className="bg-gradient lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                    <div className="text-white px-2 mx-6 my-16 md:px-12 md:mx-6">
                      <span className="text-xl font-semibold mb-6">más que un e-commerce...</span>
                      <h4 className="text-4xl">somos una tienda en línea</h4>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
