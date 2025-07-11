import React from 'react';

function HelloWorld() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };

  return (
    <div style={style}>
      <h1>hello world !</h1>
    </div>
  );
}

export default HelloWorld;
