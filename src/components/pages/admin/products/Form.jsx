const Form = () => {
  return (
    <div>
      <h1>Crear Producto</h1>
      <form action="">
        <input type="text" name="productName" placeholder="Nombre" required/>
        <input type="number" name="price" placeholder="Precio" required/>
        <input type="url" name="image" placeholder="Imagenes" required/>

        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default Form;
