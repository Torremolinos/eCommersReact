import { token } from "../../../../helpers/auth";
import axios from "axios";
import { API_URL } from "../../../../constants/env";
const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      product_name: e.target.productName.value,
      price: Number(e.target.price.value),
      images: [e.target.image.value],
      description: e.target.description.value,
      features: {
        color: e.target.color.value,
      },
    };

    axios
      .post(`${API_URL}/admin/products`, data, {
        header: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        alert("Producto creado");
      })
      .catch((error) => {
        console.error(error);
        alert("Error al crear el producto");
      });
  };

  return (
    <div>
      <h1>Crear Producto</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="productName" placeholder="Nombre" required />
        <input type="number" name="price" placeholder="Precio" required />
        <input type="url" name="image" placeholder="Imagenes" required />
        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Descripción"
          required
        />
        <input type="text" name="color" placeholder="Color" required />
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};
export default Form;
