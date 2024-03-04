import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";

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
    <div className="pt-16 max-w-256 m-auto">
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Correo Electrónico" />
        <input type="password" name="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
