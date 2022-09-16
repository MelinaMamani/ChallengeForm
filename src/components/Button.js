import React from 'react';
import exportAsImage from '../utils/exportAsImage';

const Button = ({exportRef}) => {
  return (
    <button
      onClick={() => exportAsImage(exportRef.current, "tarjetaBienvenida")}>Descargar tarjeta</button>
  )
}

export default Button;