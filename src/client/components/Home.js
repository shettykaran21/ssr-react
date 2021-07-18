import React from 'react';

const Home = () => {
  return (
    <div>
      <div>Hello</div>
      <button
        onClick={() => {
          console.log('Hello');
        }}
      >
        Press me!
      </button>
    </div>
  );
};

export default Home;
