import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import TopMovies from './components/TopMovies';
import TopIndianmovies from './components/TopIndianmovies';


function App() {
  const [movie, setMovie] = useState([]);
  

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const URL = "https://www.omdbapi.com/?s=the godfather&apikey=ba1cbdd4";
        const response = await fetch(URL);
        const finaldata = await response.json();
        console.log(finaldata);
        if (finaldata.Search) {
          setMovie(finaldata.Search);
        }
      } catch (error) { 
        console.error("Error fetching the movie data:", error);
      }
    };
    fetchMovie();
  }, []);
  

  return (
    <main>
      <Header />
      
      <Outlet />
      
      
      <TopMovies /> 
     
    
      <TopIndianmovies />
  
      
      <Footer />
     
    </main>
  );
}

export default App;
