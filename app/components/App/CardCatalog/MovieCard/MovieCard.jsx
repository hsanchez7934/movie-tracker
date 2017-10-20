import React from 'react';


const MovieCard = ({ title, releaseDate, image }) => {

  return(
    <article className='movie-card'>
      <h3 className="title-card">{title}</h3>
      <p className="release-date-card">{releaseDate}</p>
      <img src={image} alt={`${title} - poster`} />
    </article>
  )
}

export default MovieCard;
