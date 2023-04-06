

import React from 'react';
import './Btn.scss';


const MyButton = (props) => {
  const { onClick, children, variant } = props;

  return (
    <button
      className={`btn ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;




