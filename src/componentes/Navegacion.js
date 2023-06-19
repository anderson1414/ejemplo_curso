import React from 'react'
import {Link} from 'react-router-dom';
import Uno3 from '../imagenes/uno.jpg'
import Dos3 from '../imagenes/dos.jpg'
import Tres3 from '../imagenes/tres.jpg'
import Cuatro3 from '../imagenes/cuatro.jpg'
import Cinco3 from '../imagenes/cinco.jpg'

const Navegacion = () => {
  return (
    <div className="container mt-3 padre">
        <Link to="/Uno" className="links"> 
            <figure>
                <img src={Uno3} alt="" className="tamaño-img"/>
                <figcaption>Imagen 1</figcaption>
            </figure>
        </Link>

        <Link to="/Dos"className="links"> 
            <figure>
                <img src={Dos3} alt="" className="tamaño-img" />
                <figcaption>Imagen 2</figcaption>
            </figure>
        </Link>

        <Link to="/Tres"className="links"> 
            <figure>
                <img src={Tres3} alt=""  className="tamaño-img"/>
                <figcaption>Imagen 3</figcaption>
            </figure>
        </Link>

        <Link to="/Cuatro"className="links"> 
            <figure>
                <img src={Cuatro3} alt="" className="tamaño-img"/>
                <figcaption>Imagen 4</figcaption>
            </figure>
        </Link>

        <Link to="/Cinco"className="links"> 
            <figure>
                <img src={Cinco3} alt="" className="tamaño-img"/>
                <figcaption>Imagen 5</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navegacion
