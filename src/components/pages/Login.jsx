import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";

const Login = () => {

    const handleSubmit =(e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        axios.post(`${API_URL}/public/login`, data)
        .then(response => setToken(response.data.data.token))
        .catch(error => console.log(error));
        
    }

  return (
    <div className="pt-16 max-w-256 m-auto">
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Correo Electrónico"/>
        <input type="password" name="password" placeholder="Contraseña"/>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
