import React , {Fragment , useState ,useEffect} from 'react';
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Clima from './Components/Clima'
import Error from './Components/Error'

function App() {

  const [busqueda,guardarBusqueda]=useState({
    cuidad:'',
    pais:''
    });

  const [consultar,guardaConsultar]= useState(false)

  const [resultado,guardaResultado]=useState({})

  const[error,guardarError]=useState(false)

  const {cuidad,pais}= busqueda;

  useEffect(()=>{

    const consultarApi = async () =>{

        if(consultar){
          const apikey ='cf8d1c067a78ef5597c591c445000045'
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${cuidad},${pais}&appid=${apikey}
          `
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
  
          guardaResultado(resultado)
          guardaConsultar(false)

          
          if(resultado.cod === '404'){
            guardarError(true)
          }else{
            guardarError(false)
          }
  
        }
      
    }

    consultarApi();
    //eslint-disable-next-line
  },[consultar])


  let componente;

  if(error){
    componente = <Error mensaje='No hay Resultados' />
  }else{
      componente = <Clima resultado={resultado} />
  }

  return (
   <Fragment>
      <Header
        titulo='App Clima'
      />

      <div className='contenedor-form' >
        <div className='container' >
          <div className='row'>
            <div className='col m6 s12' >
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardaConsultar={guardaConsultar}
              />
            </div>
            <div className='col m6 s12' >
              {componente}
            </div>

          </div>
        </div>

      </div>
   </Fragment>
  );
}

export default App;
