import React from 'react';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
     <h1>Welcome to my React App!</h1>
     <p>This is a simple React application.</p>
     <button onClick={() => alert('Button clicked!')}>Click Me</button>
    </div>
  );
}

export default App;
