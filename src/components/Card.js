import React, { useRef, useContext } from 'react';
import personContext from '../context/person/personContext';
import Button from './Button';

const Card = () => {

  const exportRef = useRef();
  const { personState } = useContext(personContext);

  return (
    <div className="cardContainer" aria-label="cardContainer">
      {
        personState?.age ? 
          (<section className="cardAndButton">
            <div
              className="card"
              ref={exportRef}>
              <img
                src={personState.image}
                className="imgUser"
                alt="userPhoto"/>
              <h2 className="name">{personState.name} {personState.lastName}</h2>
              <h4>{personState.email}</h4>
              <h5>Edad: {personState.age} años</h5>
            </div>
            <Button exportRef={exportRef}/>
          </section>)
          : (<div className="loaderContainer">
              <p>Esperando tu tarjeta de bienvenida</p>
              <img
                src="/assets/waiting.svg"
                className="loader"
                alt="loaderIcon"/>
            </div>)
      }
    </div>
  )
}

export default Card;