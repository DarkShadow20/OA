import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavourite } from '../features/movieSlice';

const Favourites = () => {
  const favourites = useSelector(state => state.movies.favourites);
  const dispatch = useDispatch();
  if (favourites.length==0) return <div className='m-2'>No movie in favourites</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Favourite Movies</h1>
      <div className="grid grid-cols-3 gap-4">
        {favourites.map(movie => (
          <div className="bg-gray-200 p-4" key={movie.id}>
            <img src={movie.image} alt={movie.name} className="w-full" />
            <h2 className="text-xl mt-2">{movie.name}</h2>
            <button
              onClick={() => dispatch(removeFavourite(movie))}
              className="mt-2 bg-red-500 text-white px-4 py-2"
            >
              Remove from Favourites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
