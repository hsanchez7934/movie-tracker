import React from 'react';


const MovieCard = ({ title, releaseDate, image }) => {

  return(
    <article className='movie-card'>
      <div className="header-container">
      <h3 className="title-card">{title}</h3>
      <p className="release-date-card">Release Date: {releaseDate}</p>
    </div>
      <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${image}`} alt={`${title} - poster`} />

    </article>
  )
}

export default MovieCard;
