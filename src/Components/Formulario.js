import React , {useState} from 'react';
import Error from './Error'


const Formulario = ({busqueda,guardarBusqueda,guardaConsultar}) => {

 

    const [error,guardarError]=useState(false);
    
    //Extrae la cuidad y el pais
    const {cuidad,pais}= busqueda

    //funcion que coloca los elementos en el state

    const handleChange = e=>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();

        //validacion
        if(cuidad.trim()===''||pais.trim()===''){
            guardarError(true)
            return;
        }

        guardarError(false)

        guardaConsultar(true)

    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
           {error? <Error mensaje='Todos los campos son obligatorios' /> :null}
            <div className='input-field col s12' >
                <input
                    type='text'
                    name='cuidad'
                    id='ciudad'
                    value={cuidad}
                    onChange={handleChange}
                />
                <label htmlFor='ciudad' >Ciudad:</label>
            </div>
            <div className='input-field col s12' >

                <select
                    name='pais'
                    id='pais'
                    value={pais}
                    onChange={handleChange}
                >
                    <option value=''>--Seleccione Un Pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>

                <label htmlFor='pais'>Pais:</label>
            </div>

            <div className='input-field col s12' >
                <button
                    type='submit'
                    className='waves-effect waves-light btn-large btn-block yellow accent-4'
                    >
                    Consultar Clima
                </button>
                
            </div>
        </form>
     );
}
 
export default Formulario;