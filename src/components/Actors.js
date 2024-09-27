import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, id) => (
        <div key={id}>
          <h2 key={actor.name}>Name: {actor.name}</h2>
          <p>Movies:</p>
          <ul>
            {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
