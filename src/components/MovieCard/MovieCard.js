import React from 'react'
import './MovieCard.scss'
const MovieCard = ({favorite_img, movie_img, ratings_imdb, ratings_apple, title, rating_a, rating_b, tv_series}) => {
    return (
        <div className="movie-card"draggable="false">
            <div className="movie-card__img">
                <img src={favorite_img} alt="favorite" className="movie-card__img--favorite" draggable="false"/>
                {tv_series && <div className="movie-card__img--series">TV SERIES</div>}
                <img src={movie_img} className="movie-card__img--img" alt="movie card img" draggable="false"/>
            </div>
            <div className="movie-card__divider"></div>
            <div className="movie-card__sub">USA, 2016 - Current</div>
            <div className="movie-card__divider"></div>
            <h2 className="movie-card__title">{title}</h2>
            <div className="movie-card__divider"></div>
            <div className="movie-card__ratings">
                <div className="movie-card__ratings--a">
                    <img src={ratings_imdb} alt="ratings" />
                    <span>{rating_a}/100</span>
                </div>
                <div className="movie-card__ratings--a">
                    <img src={ratings_apple} alt="ratings" />
                    <span>{rating_b}%</span>
                </div>
            </div>
            <div className="movie-card__divider"></div>
            <div className="movie-card__genre">Action, Adventure/Horror</div>
        </div>
    )
}

export default MovieCard