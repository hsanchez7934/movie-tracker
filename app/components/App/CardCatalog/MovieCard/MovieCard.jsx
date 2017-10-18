import React from 'react';

export default const MovieCard = ({ title, releaseDate, image }) => {

  return(
    <article className='movie-card'>
      <h3>{title}</h3>
      <p>{releaseDate}</p>
      <img src={image} alt={`${title} - poster`} />
    </article>
  )
}
