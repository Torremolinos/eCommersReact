// import React from 'react' lo quito porque tengo el react router instalado

import { API_URL } from "../../constants/env"


const Home = () => {
  return (
    <div>
        <h1>Bienvenido/a {API_URL}</h1>
        <p>Este es el sitio de desarrollo</p>
    </div>
  )
}

export default Home


// sino importo el const home desde export const home, debo poner abajo export default esta seria la metodlogia correcta y no necesitaria llaves a la hora de importarlo