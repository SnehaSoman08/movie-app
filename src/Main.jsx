import React, { useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [movieName, setMovieName] = useState('');
  const [movieData, setMovieData] = useState(null);
  const apiKey = 'fa1c9c03';

  const fetchMovieData = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`);
      setMovieData(response.data);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ marginTop: '120px', marginLeft: '500px' }}>
        <input
          type="text"
          placeholder="Enter movie name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          style={{ borderRadius: '8px', border: 'solid white', padding: '5px', marginLeft: '160px' }}
        />
        <button
          style={{
            borderRadius: '8px',
            border: 'solid black',
            padding: '5px',
            backgroundColor: 'black',
            color: 'white',
            marginLeft: '10px',
          }}
          onClick={fetchMovieData}
        >
          {' '}
          Search{' '}
        </button>
      </div>

      {movieData && (
        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            background: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:"400px",
            marginRight:'5px',
            marginLeft:'680px'
          }}
        >
          <h2>{movieData.Title}</h2>
          <img src={movieData.Poster} alt={movieData.Title} style={{ maxWidth: '100%',height:'250px' }} />
          <p style={{fontSize:'15px'}}>Released Date: {movieData.Released}</p>
          <p style={{fontSize:'15px'}}>Actors: {movieData.Actors}</p>
          <p style={{fontSize:'15px'}}>Plot: {movieData.Plot}</p>
          <p style={{fontSize:'15px'}}>Ratings: {movieData.Ratings.map((rating) => `${rating.Source}: ${rating.Value}`).join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Main;

