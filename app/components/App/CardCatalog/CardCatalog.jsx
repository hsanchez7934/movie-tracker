import React from 'react';
import MovieCard from './../MovieCard/MovieCard';

export default const CardCatalog = ({ movies }) => {
  const mappedCards = movies.map( movie => {
    return (<MovieCard
            title={movie.title}
            releaseDate={movie.release_date}
            image={movie.poster_path} />)
  })
  return (
    <div>
      {mappedCards}
    </div>
  )
};
