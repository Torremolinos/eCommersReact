// importar los productos
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../pages/Products";

const ProductCard = ({ product }) => {
  //Pasamos los elementos que recibe del componente padre, que es el producto
  const { images, product_name, id, price, description } = product;

  return (
    <article className="w-full max-w-sm bg-white round-lg shadow-lg p-5">
      <div className="mb-5 rounded-lg overflow-hidden">
        <Link to={`products/${id}`}>
          <img
            className="align-middle h-40 w-full object-cover"
            src={images[0]}
            alt={product_name}
          />
        </Link>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">{product_name}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-gray-600 mb-2">${price}</p>
        <Link
          to={`products/${id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver más
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
