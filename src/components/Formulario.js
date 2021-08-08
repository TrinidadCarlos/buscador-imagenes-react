import React, {useState} from 'react';
import Alerta from './Alerta';

const Formulario = ({setTermino}) => {

    const [imagenBuscar, setImagenBuscar] = useState('');
    const [error, setError] = useState(false);
    
    const validarImagen = (e) => {
        e.preventDefault();
        if (imagenBuscar.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        setTermino(imagenBuscar);
        setImagenBuscar('');

    }


    return ( 
        <form onSubmit={validarImagen}>

            {error ? <Alerta mensaje='Coloca un término válido' /> : null}

            <div className="row align-items-center">
                <div className="form-group col-md-8">
                    <input type="text" name="imagen" id="image" placeholder="ej. Árboles"  className="row form-control"
                     onChange={(e) => {setImagenBuscar(e.target.value)}}  
                     value={imagenBuscar}
                     />
                </div>
                <div className="form-group col-md-3 mx-auto">
                    <input type="submit" className="btn btn-success text-uppercase font-weight-bold mx-auto d-block" value="Buscar ahora " />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;