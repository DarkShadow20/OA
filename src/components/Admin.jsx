import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, removeMovie,removeComment } from '../features/movieSlice';

const Admin = () => {
  const movies = useSelector(state => state.movies.movies);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  
  const [image, setImage] = useState('');

  const handleAddMovie = () => {
    const newMovie = {
      id: Date.now().toString(),
      name,
      detail,
      image,
      comment: [],
    };
    dispatch(addMovie(newMovie));
    setName('');
    setDetail('');
    setImage('');
};
const handleRemoveComment = (movieId, commentId) => {
    dispatch(removeComment({ movieId, commentId }));
  };

return (
    <div className="p-4">
        <h1 className="text-2xl mb-4">Admin Panel</h1>
        <div className="mb-4">
            <input type="text" placeholder="Title" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full mb-2"/>
            <textarea placeholder="Description" value={detail} onChange={(e) => setDetail(e.target.value)}
            className="border p-2 w-full mb-2" ></textarea>

            <input type="text" placeholder="Thumbnail URL" value={image} onChange={(e) => setImage(e.target.value)}
            className="border p-2 w-full mb-2"/>
            <button onClick={handleAddMovie} className="bg-blue-500 text-white px-4 py-2">
                Add Movie
            </button>
        </div>
        <div>
        <h2 className="text-xl mb-4">All Movies</h2>
        {movies.map(movie => (
          <div key={movie.id} className="bg-gray-200 p-4 mb-4">
            <h3 className="text-lg">{movie.name}</h3>
            <div className='flex justify-center m-2'>
                <img src={movie.image} alt={movie.name}/>
            </div>
            <p>{movie.detail}</p>
            <button
              onClick={() => dispatch(removeMovie(movie))}
              className="bg-red-500 text-white px-4 py-2 mt-2"
            >
              Remove Movie
            </button>
            {movie.comment.length ?<h4 className="text-lg mt-4">Comments</h4> : <h4 className="text-lg mt-4">No Comments</h4>}
            {movie.comment.map(comment => (
              <div key={comment.id} className="border-b py-2 flex justify-between items-center">
                <span>{comment.text}</span>
                <button
                  onClick={() => handleRemoveComment(movie.id, comment.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
</div>
);
};

export default Admin;