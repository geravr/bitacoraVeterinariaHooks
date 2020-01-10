import React, { Fragment, useState } from 'react';

const Formulario = ({crearCita}) => {

    const stateInicial = {
      mascota : '',
      propietario : '',
      fecha : '',
      hora : '',
      sintomas : '',
      error : false
  
    }
  
    // cita = state actual
    // setCita = funcion para cambiar el state
    const [cita, setCita] = useState(stateInicial);
  
    // actualiza el state
    const handleChange = e => {
      setCita({
        ...cita,
        [e.target.name] : e.target.value
      })
    }
  
    // pasamos la cita al componente principal
    const handleSubmit = e => {
      e.preventDefault();
        
        //Extraer valores del state
        const {mascota, propietario, fecha, hora, sintomas} = cita
  
        //Validar que todos los valores estén llenos
        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
          setCita({
                ...cita,
                error: true
          });
          
          return;  
                 
        }
  
  
      //Pasar cita al componente principal y reiniciar el state
      crearCita(cita);
  
      // Reiniciar el state (reinicia el form)
      setCita(stateInicial)
  
    }
  
    return (
      <Fragment>
        <h2>Crear Cita</h2>
        { cita.error ? 
            <span className="badge-danger">
              Todos los campos son obligatorios
            </span>
            : null}
        <form onSubmit={handleSubmit}>
                    <label>Nombre Mascota</label>
                    <input 
                      type="text" 
                      name="mascota"
                      className="u-full-width" 
                      placeholder="Nombre Mascota" 
                      onChange={handleChange}
                      value={cita.mascota}
                    />
  
                    <label>Nombre Dueño</label>
                    <input 
                      type="text" 
                      name="propietario"
                      className="u-full-width"  
                      placeholder="Nombre Dueño de la Mascota" 
                      onChange={handleChange}
                      value={cita.propietario}
                    />
  
                    <label>Fecha</label>
                    <input 
                      type="date" 
                      className="u-full-width"
                      name="fecha"
                      onChange={handleChange}
                      value={cita.fecha}
                    />               
  
                    <label>Hora</label>
                    <input 
                      type="time" 
                      className="u-full-width"
                      name="hora" 
                      onChange={handleChange}
                      value={cita.hora}
                    />
  
                    <label>Sintomas</label>
                    <textarea 
                      className="u-full-width"
                      name="sintomas"
                      onChange={handleChange}
                      value={cita.sintomas}
                    ></textarea>
  
                    <button type="submit" className="button-primary u-full-width">Agregar</button>
            </form>
    </Fragment>
    );
  }
 
export default Formulario;