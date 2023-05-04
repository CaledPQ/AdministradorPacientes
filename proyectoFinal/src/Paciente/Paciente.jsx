import React from 'react';
import  "./Paciente.css";

export default function Paciente({pacientes, setPacientes, nombre, dueño, fecha, hora, sintoma}) {

  const eliminarCita=()=>{
    const newPacientes=pacientes.filter(paciente => paciente.dueño != dueño);
    setPacientes(newPacientes)
  }
  return (
    <form className='pacienteContainer'>
    <h2>Nombre: {nombre}</h2>
        <h2>Dueño: {dueño}</h2>
        <h2>Fecha: {fecha}</h2> 
        <h2>Hora: {hora}</h2> 
        <h2>Sintomas: {sintoma}</h2> 

        <button className='btn' onClick={eliminarCita}>ELIMINAR CITA</button>
         </form>   
  )
}
