import React from 'react';
import  "./Paciente.css";

export default function Paciente({nombre, dueño, fecha, hora, sintoma}) {

  return (
    <form className='pacienteContainer'>
    <h2>Nombre: {nombre}</h2>
        <h2>Dueño: {dueño}</h2>
        <h2>Fecha: {fecha}</h2> 
        <h2>Hora: {hora}</h2> 
        <h2>Sintomas: {sintoma}</h2> 
         </form>   
  )
}
