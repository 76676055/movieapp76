import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const TopIndianmovies = () => {
  const [topIndianMovies, setTopIndianMovies] = useState([]);

  useEffect(() => {
    const fetchTopIndianMovies = async () => {
      try {
        const movieTitles = [
          "Ramayana: The Legend of Prince Rama",
          "12th Fail",
          "Nayakan",
          "Gol Maal",
          "Anbe Sivam",
          "Rocketry: The Nambi Effect",
          "777 Charlie",
          "Pariyerum Perumal",
          "#Home",
          "3 Idiots"
        ];

        const fetchPromises = movieTitles.map(title =>
          fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=ba1cbdd4`)
            .then(response => response.json())
        );

        const moviesData = await Promise.all(fetchPromises);
        setTopIndianMovies(moviesData.filter(movie => movie.Response !== "False"));
      } catch (error) {
        console.error("Error fetching top Indian movies:", error);
      }
    };

    fetchTopIndianMovies();
  }, []);

  return (
    <section>
      <h1 className='font-bold ml-24 text-3xl mt-20'>Top 10 Indian IMDB Rated Movies of All Time</h1>
      <div className="movies-container">
        {topIndianMovies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default TopIndianmovies;
