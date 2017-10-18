import React from 'react';

const MovieCard = ({ title, releaseDate, image }) => {

  return(
    <article className='movie-card'>
      <h3>{title}</h3>
      <p>{releaseDate}</p>
      <img src={image} alt={`${title} - poster`} />
    </article>
  )
}

export default MovieCard;
