import React, { useState, useEffect } from 'react';
import MovieCard from './components/movie';
import './App.css'

function App() {
  const [endPoint, setEndPoint] = useState('');
  const [results, setResults] = useState([]);
  const [finalPoint, setfinalPoint] = useState('');

  useEffect(() => {
    console.log('useEffect called with endPoint:', endPoint);
    const fetchResults = async () => {
        try {
          const response = await fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${endPoint}`, {
            method: 'GET',
            headers: {
              'x-rapidapi-key': 'c0a861bd39msh1c62e73547d35bfp1e0041jsnf1735e356969',
              'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
            }
          });
          const data = await response.json();
          console.log('API response:', data);
          setResults(data.d);
        } catch (error) {
          console.error(error);
        }
      }
    fetchResults();
  }, [finalPoint]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('handleSearch called with value:', e.target.value);
    setEndPoint(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setfinalPoint(endPoint);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" value={endPoint} onChange={handleSearch} />
        <button type="submit">Search movie</button>
      </form>
        
      <div className="movie-grid">
        {results.map((result) => (
          <MovieCard key={result.id} movie={{ title: result.l, image: result.i.imageUrl, description: result.s }} />
        ))}
      </div>
    </div>
  );
}

export default App;
