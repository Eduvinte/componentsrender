import React from 'react'
import { useState } from 'react'
import { ColaboradoresList } from './Lista'

function Colaboradores() {

    const [lista, setLista] = useState (ColaboradoresList);
    const [nombre, setNombre] = useState ('')
    const [correo, setCorreo] = useState ('')
    const [search, setSearch] = useState ('')
   

    const registrarColaborador = (e) => {
        e.preventDefault()
        setLista([...lista, {nombre: nombre, correo: correo}])
      }

    const borrar = (tarea) => {
        const borrarColaborador = lista.filter(element => element.nombre !== tarea.nombre)
        setLista(borrarColaborador)
      }
      
    
      const capturarNombre = (e) => {
        setNombre(e.target.value)
      }
    
      const capturarCorreo = (e) => {
        setCorreo(e.target.value)
      }

      const capturarFiltro = (e) => {
        setSearch(e.target.value)
      }


    
  return (
    <div className='container-principal'>
        <div className='container-one'>
        <form onSubmit={registrarColaborador}>
        <label>Nombre</label><br></br>
        <input type='text' onChange={capturarNombre} /><br></br>
        <label>Correo</label><br></br>
        <input type='text' onChange={capturarCorreo} /><br></br>
        <button style={{marginTop: '2%'}}>Registrar Colaborador</button>
        </form>

        {lista.map(tarea => <div style={{marginTop: '15%'}} key={tarea}>
        {tarea.nombre}<br></br>
        {tarea.correo}
        <button style={{marginTop: '2%'}} onClick={() => borrar(tarea)}>Borrar</button>
        </div>)}
        </div>

        <div className='container-two'>
        <form>
        <label style={{fontWeight: 'bold'}}>Filtre por nombre</label><br></br>
        <input style={{marginTop: '5%'}} type='text' onChange={capturarFiltro} /><br></br>
        </form>
        {lista.filter((item) => {
            return search === '' ? item : item.nombre.includes(search)
        }).map((item) => (
            <div style={{marginTop: '15%'}} key={item.nombre}>
                {item.nombre}<br></br>
                {item.correo}
            </div>
        ))}
        </div>
    </div>
  )
}

export default Colaboradores