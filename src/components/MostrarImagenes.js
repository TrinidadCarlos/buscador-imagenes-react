import React from 'react';
import Imagen from './Imagen';

const MostrarImagenes = ({resultadoBusqueda}) => {
    return (  
        <div className="col-12 p-5 row">
            {resultadoBusqueda.map( img => (
                <Imagen key={img.id} img={img}/>
            ))}
        </div>
    );
}
 
export default MostrarImagenes;