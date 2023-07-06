// import React from 'react';
import Feedback from './/Feedback/Feedback.js';
// import Welcome from './/Welcome/Welcome.js';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedback 
      title = 'Please leave feedback'/>
    
    {/* <Welcome step={5} /> */}
    </div>
  );
};
