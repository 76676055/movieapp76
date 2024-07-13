import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const SearchPage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q');
    if (query) {
      const fetchMovies = async () => {
        try {
          const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=ba1cbdd4`);
          const data = await response.json();
          console.log(data); // Check the response
          if (data.Search) {
            setMovies(data.Search);
          } else {
            setMovies([]);
          }
        } catch (error) {
          console.error('Error fetching the movies:', error);
        }
      };
      fetchMovies();
    }
  }, [location.search]);

  return (
    <div className="movies-container">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p> </p> 
      )}
    </div>
  );
};

export default SearchPage;
