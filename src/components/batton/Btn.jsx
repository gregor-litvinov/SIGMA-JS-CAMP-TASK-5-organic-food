

import React from 'react';

const MyButton = (props) => {
  const { onClick, children } = props;

  return (
    <button
      className="MyButton"
      onClick={onClick}
      style={{
        width: '220px',
        height: '79px',
        background: '#EFD372',
        borderRadius: '16px',
        color: '#274c5b',
        fontSize: '20px',
        fontWeight: '700',
      }}
    >
      {children}
    </button>
  );
};

export default MyButton;




