import React from 'react';

const MovieCard = ({ movie, addToCart }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title}  style={{ width: '200px', height: '300px' }} />
      <h2 className='mt-4 text-2xl text-black font-extrabold'>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <p>IMDb Rating: {movie.imdbRating}</p>
      <div className="movie-card-options">
        <button className="rent-button" >Rent</button>
        <button className="buy-button" >Buy</button>
      </div>
    </div>
  );
};

export default MovieCard;
