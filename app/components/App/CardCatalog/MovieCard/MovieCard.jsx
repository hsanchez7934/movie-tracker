import React from 'react';


const favoriteMovie = (id, movie) => {
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

const handleClick = (id, movie, favorites, deleteFavorite, addFavorite) => {
  const indexOfFavorites = favorites.findIndex(favorite => favorite.movie_id === movie.id);
  if(indexOfFavorites !== -1){
    deleteFavorite(favoriteMovie(id, movie));
  } else {
    addFavorite(favoriteMovie(id, movie));
  }
}



const MovieCard = ({ title, releaseDate, image, addFavorite, voteAverage, overview, movieID, login, movie, deleteFavorite, favorites }) => {

  return(
    <article className='movie-card'>
      <button className="fav-button" onClick={() => handleClick(login.id, movie, favorites, deleteFavorite, addFavorite)}>Add Favorite</button>
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
