

import React from 'react';
import './Btn.scss';


const MyButton = (props) => {
  const { onClick, children, variant } = props;

  return (
    <button
      className={`btn ${variant}`}
      onClick={onClick}
      // style={{
      //   width: "220px",
      //   height: "79px",
      //   background: "#EFD372",
      //   borderRadius: "16px",
      //   color: "#274c5b",
      //   fontSize: "20px",
      //   fontWeight: "700",
      // }}
    >
      {children}
    </button>
  );
};

export default MyButton;




