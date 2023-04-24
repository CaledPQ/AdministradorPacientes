import React, { useState } from 'react'
import "./Formulario.css"

export default function Formulario() {
  const [pacientes, setPacientes] = useState ([])
  const [mascota, setMascota] = useState ("")
  const [dueño, setDueño] = useState ("")
  const [fecha, setFecha] = useState ("")
  const [hora, setHora] = useState("")
  const [sintoma, setSintoma] = useState("")


  function agregarPaciente(){
    const informacion=(
      mascota,
      dueño,
      fecha,
      hora,
      sintoma
    )
    setPacientes([...pacientes,informacion])
    setMascota("")
    setDueño("")
    setSintoma("")
  }

  return (
    <div className='container'>
      <div className="title">
      <h1 className="title1">Crear Cita</h1>
      <h1 className="title1">No Hay Citas</h1>
      </div>
        <form className='inputForm' action=''>
          <div className='name'>
          <label htmlFor=''>Nombre Mascota</label>
          </div>
          <div className='input'>
          <input onChange={(e) => { setMascota(e.target.value)}} value={mascota} type="text" />
          </div>
          <div className='name'>
          <label htmlFor=''>Dueño</label>
          </div>
          <div className='input'>
          <input onChange={(e) => { setDueño(e.target.value)}} value={dueño} type="text" />
          </div>
          <div className='name'>
          <label htmlFor=''>Fecha de Registro</label>
          </div>
          <div className='input'>
          <input onChange={(e) => { setFecha(e.target.value)}} value={fecha} type="date" />
          </div>
          <div className='name'>
          <label htmlFor=''>Hora de Registro</label>
          </div>
          <div className='input'>
          <input onChange={(e) => { setHora(e.target.value)}} value={hora} type="time" />
          </div>
          <div className='name'>
          <label htmlFor=''>Sintomas de la mascota</label>
          </div>
          <div className='input'>  
          <input onChange={(e) => { setSintoma(e.target.value)}} value={sintoma} type="text" />
          </div>


          <div className='button2'>  
          <button type="submit" >Agregar</button>
          </div>
        </form>

    </div>
  )
}
