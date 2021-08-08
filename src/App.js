import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Formulario from "./components/Formulario";
import Alerta from "./components/Alerta";
import MostrarImagenes from "./components/MostrarImagenes";

function App() {
  const [termino, setTermino] = useState("");
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);
  const [error, setError] = useState(false);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [bandera, setBandera] = useState(false);

  useEffect(() => {
    const pixabayApi = async () => {
      if (termino.trim() === "") return null;

      const imagenesPorPagina = 30;
      const key = "20585514-e37ee9918335db7eecfff164a";
      const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

      try {
        const resultadoConsulta = await axios.get(url);
        
        setResultadoBusqueda(resultadoConsulta.data.hits);
        //calcular total de páginas
        setTotalPaginas(
          Math.ceil(resultadoConsulta.data.totalHits / imagenesPorPagina)
        );
        setBandera(true);
        setError(false);
      } catch (error) {
        setBandera(false);
        setError(true);
      }
    };
    pixabayApi();
  }, [termino, paginaActual]);


  //definir la página anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual -1;
    if(nuevaPaginaActual === 0) return ;
    setPaginaActual(nuevaPaginaActual);
  }
  
  //definir la página siguiente
  const paginaSiguiente = () =>{
    const nuevaPaginaActual = paginaActual +1;
    if (nuevaPaginaActual > totalPaginas) return;
    setPaginaActual(nuevaPaginaActual);
  }



  return (
    <div className="container">
      <div className="jumbotron mt-4">
        <p className="lead text-center font-weight-bold text-uppercase">
          Buscador de imágenes
        </p>
        <Formulario setTermino={setTermino} />
        {error ? (
          <Alerta mensaje="Ha ocurrido un error al realizar la consulta..." />
        ) : null}
      </div>
      <div className="row justify-content-center">
        {bandera ? (
          <Fragment>
            <MostrarImagenes resultadoBusqueda={resultadoBusqueda} />
            {(paginaActual === 1) 
            ? null 
            :<button className="btn btn-primary mr-2" onClick={paginaAnterior}>
              &laquo; Página Anterior</button>
            }

            {
              (paginaActual === totalPaginas)
               ? null
             : <button className="btn btn-primary ml-2" onClick={paginaSiguiente}>
              Página Siguiente &raquo;
            </button>
            }
          </Fragment>
        ) : null}
      </div>
    </div>
  );
}

export default App;
