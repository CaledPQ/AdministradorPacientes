import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header/Header";
import Formulario from "./Formulario/Formulario";
import Paciente from "./Paciente/Paciente";

function App() {
  // set [Count, setCount] = useState(0)
  const [pacientes, setPacientes] = useState([]);

  return (
    
    <div className="container">

      <div className="header">
        <Header titulo="CREAR CITA"/>
          <Formulario pacientes={pacientes} setPacientes={setPacientes} />
      </div>
      <div className="body">
        <div className="body2">
          <Header titulo="NO HAY CITAS"/>
          {pacientes.map((paciente) => {
            return (
              <Paciente
                nombre={paciente.mascota}
                dueño={paciente.dueño}
                fecha={paciente.fecha}
                hora={paciente.hora}
                sintoma={paciente.sintoma}
                key={paciente.sintoma}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
