import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './Components/Formulario'
import Cita from './Components/Cita'
import Header from './Components/Header'


function App() {

  // cargar las citas de localstorage como state inicial
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  } 

  const [citas, setCitas] = useState(citasIniciales);

  //Agregar nuevas citas al state
  const crearCita = cita => {
    //Tomar una copia del state y agregar el nuevo cliente
    const nuevasCitas = [...citas, cita]
    
    setCitas(nuevasCitas);
  }

  // Elimina las citas del state
  const eliminarCita = index => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1)
    setCitas(nuevasCitas);
  }

  useEffect(
    () => {
      let citasIniciales = JSON.parse(localStorage.getItem('citas'));
      if(citasIniciales) {
        localStorage.setItem('citas', JSON.stringify(citas));
      } else {
        localStorage.setItem('citas', JSON.stringify([]));
      }
    }, [citas]
  )

  // Cargar condicionalmente un título
  const titulo = Object.keys(citas).length === 0 ? 'No hay citas' : 'Control de citas';

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
            crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita, index) => (
              <Cita 
                key={index}
                index={index}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
