import React from 'react'
import './NewArrival.scss'
import imdb from '../../../assets/imdb.png'
import apple from '../../../assets/apple.png'
import favorite from '../../../assets/favorite.png';
import arrow_right from '../../../assets/arrow_right.png'
import arrow_left from '../../../assets/arrow_left.png'
import newarrival_1 from '../../../assets/newarrival_1.png'
import newarrival_2 from '../../../assets/newarrival_2.png'
import newarrival_3 from '../../../assets/newarrival_3.png'
import newarrival_4 from '../../../assets/newarrival_4.png'
import MovieCard from '../../../components/MovieCard/MovieCard';


const NewArrival = () => {

    return (
        <div className="max-wrapper standard__spacing--top">
            <div className="max-wrapper__content featured-movie">
                <div className="featured-movie__header">
                    <h1>New Arrival</h1>
                    <span className="featured-movie__header--see-more">See more <span className="material-icons">chevron_right</span></span>
                </div>
                <div className="featured-movie__divider"></div>
                <div className="featured-movie__divider"></div>
                <div className="featured-movie__collection">
                    <div className="featured-movie__collection--arrow-left"><img src={arrow_left} alt="arrow_left"/></div>
                    <div className="featured-movie__collection--arrow-right"><img src={arrow_right} alt="arrow_right"/></div>
                    <MovieCard favorite_img={favorite} movie_img={newarrival_1} ratings_imdb={imdb} ratings_apple={apple} title={"Dune"} rating_a={"80.0"} rating_b={"97"} genre={"Action, Adventure, Horror"} />
                    <MovieCard favorite_img={favorite} movie_img={newarrival_2} ratings_imdb={imdb} ratings_apple={apple} title={"No Time To Die"} rating_a={"82.0"} rating_b={"70"} genre={"Action, Adventure"}/>
                    <MovieCard favorite_img={favorite} movie_img={newarrival_3} ratings_imdb={imdb} ratings_apple={apple} title={"Shang-Chi and the Legend of the Ten Rings"} rating_a={"84.0"} rating_b={"87"} genre={"Animation, Action, Adventure"}/>
                    <MovieCard favorite_img={favorite} movie_img={newarrival_4} ratings_imdb={imdb} ratings_apple={apple} title={"Don't Breathe 2"} rating_a={"78.0"} rating_b={"94"} genre={"Animation, Drama, History"}/>
                </div>
            </div>
        </div>
    )
}

export default NewArrival