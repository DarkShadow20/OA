import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addFavourite, addComment } from '../features/movieSlice';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = useSelector(state => state.movies.movies.find(m => m.id == id));
  const favourites = useSelector(state => state.movies.favourites)
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const handleAddComment = () => {
    if (comment.trim()) {
      dispatch(addComment({ movieId: id, comment: { id: Date.now(), text: comment } }));
      setComment('');
    }
  };
  const isFavourite = favourites.some(fav => fav.id == id);

  if (!movie) return <div>Movie not found</div>;
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">{movie.name}</h1>
      <p>{movie.detail}</p>
      <div className='flex justify-center m-1'>
        <img src={movie.image} alt={movie.name}/>
      </div>
      <button
        onClick={() => !isFavourite && dispatch(addFavourite(movie))}
        className={`mt-2 ${isFavourite ? 'bg-gray-500' : 'bg-blue-500'} text-white px-4 py-2`}
        disabled={isFavourite}
      >
        {isFavourite ? 'Added' : 'Add to Favourites'}
      </button>
      <h2 className="text-xl mt-4">Comments</h2>
      <div>
        {movie.comment.map(c => (
          <div key={c.id} className="border-b py-2">
            <div className='ml-2 flex flex-col items-start'>
                {c.text}
                <div className='text-gray-700 text-xs'>
                {new Date(c.id).toLocaleString()}
                </div>
            </div>
          </div>
        ))}
      </div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 border mt-2"
      ></textarea>
      <button
        onClick={handleAddComment}
        className="mt-2 bg-green-500 text-white px-4 py-2"
      >
        Add Comment
      </button>
    </div>
  );
};

export default MovieDetail;
