import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const movies = useSelector(state => state.movies.movies);
  return (  
    <div className="p-4">
      <h1 className="text-2xl mb-4">All Movies</h1>
      <div className="grid grid-cols-3 gap-4">
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="bg-gray-200 p-4">
              <img src={movie.image} alt={movie.name} className="w-full" />
              <h2 className="text-xl mt-2">{movie.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;