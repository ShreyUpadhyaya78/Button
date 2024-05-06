import React, { useContext, useState } from 'react';
import { StoreContext } from './store';

const availableColors = ['red', 'green', 'blue', 'black', 'orange'];

const Button = () => {
  const [color, setColor] = useState('black');
  const { state, dispatch } = useContext(StoreContext);

  const handleClick = () => {
    let newColor;
    do {
      if (color === 'blue') {
        newColor = 'green';
      } else {
        newColor =
          availableColors[Math.floor(Math.random() * availableColors.length)];
      }
    } while (newColor === color);
    setColor(newColor);
    dispatch({ type: 'ADD_COLOR', payload: newColor });
  };

  return (
    <div className='centered'>
      <button
        onClick={handleClick}
        style={{ backgroundColor: color}}
      >
        Click Me!!
      </button>
      <p>
        <b>Color History:</b>
        {state.colors.map((color, index) => (
          <span key={index} style={{ color }}>
            {color}
            {index !== state.colors.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Button;
