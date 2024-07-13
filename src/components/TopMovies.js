import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const TopMovies = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const movieTitles = [
          "The Shawshank Redemption",
          "The Godfather",
          "The Dark Knight",
          "The Godfather Part II",
          "12 Angry Men",
          "Schindler's List",
          "The Lord of the Rings: The Return of the King",
          "Pulp Fiction",
          "The Good, the Bad and the Ugly",
          "Fight Club"
        ];

        const fetchPromises = movieTitles.map(title =>
          fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=ba1cbdd4`)
            .then(response => response.json())
        );

        const moviesData = await Promise.all(fetchPromises);
        setTopMovies(moviesData.filter(movie => movie.Response !== "False"));
      } catch (error) {
        console.error("Error fetching top movies:", error);
      }
    };

    fetchTopMovies();
  }, []);

  return (
    <section>
      <h1 className='font-bold ml-24 text-3xl mt-32'>Top 10 IMDB Rated Movies of All Time</h1>
      <div className="movies-container">
        {topMovies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default TopMovies;
