import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    alert(searchTerm);
    console.log('Search query:', searchTerm);
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
     <h1>Welcome to my React App!</h1>
     <p>This is a simple React application.</p>
     <input type="text" placeholder="Search..." style={{ padding: '10px', fontSize: '16px' }} onChange={(e) => setSearchTerm(e.target.value)} />
     <button onClick={() => handleSearch()}>Click Me</button>
     <p>Search Term: {searchTerm}</p>
    </div>
  );
}

export default App;
