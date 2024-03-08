import useFetch from "../../hooks/useFetch";
import React from "react";
const Products = () => {
  const { data, error, loading } = useFetch("public/products");
  if (loading) {
    return <p>Cargando...</p>;
  }
  if (error) {
    return <p>Error en la peticion de productos...</p>;
  }
  return (
    <div>
      <h1>Productos</h1>
      {data.lenght === 0 ? (
        <p>No hay productos</p>
      ) : (
        data.map((product) => (
          <div key={product.id}>{JSON.stringify(product)}</div>
        ))
      )}
    </div>
  );
};
export default Products;
