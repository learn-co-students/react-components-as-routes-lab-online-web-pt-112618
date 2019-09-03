import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, id) => (
          <div key={id}>
            <h2 key={movie.title}>Name: {movie.title}</h2>
            <p key={movie.time}>Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>
              {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
          </div>
        ))}

    </div>
  );
};

export default Movies;
