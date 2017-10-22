import React from 'react';


const favoriteMovie = (id, movie) => {
  console.log(movie);
  const { title, release_date, poster_path, vote_average, overview } = movie;
  return {  user_id: id,
            title,
            release_date,
            poster_path,
            vote_average,
            overview,
            movie_id: movie.id
  }
}



const MovieCard = ({ title, releaseDate, image, addFavorite, voteAverage, overview, movieID, login, movie }) => {

  return(
    <article className='movie-card'>
      <button className="fav-button" onClick={() => addFavorite(favoriteMovie(login.id, movie))}>Add Favorite</button>
      <div className="header-container">
      <h3 className="title-card">{title}</h3>
      <p className="release-date-card">Release Date: {releaseDate}</p>
      <p className="overview">Overview: {overview}</p>
      <p className="voteAverage">Rating: {voteAverage}</p>
    </div>
      <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${image}`} alt={`${title} - poster`} />
    </article>
  )
}

export default MovieCard;
