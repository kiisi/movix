import React, { useRef, useState, useEffect } from 'react'
import './FeaturedMovie.scss'
import imdb from '../../../assets/imdb.png'
import apple from '../../../assets/apple.png'
import favorite from '../../../assets/favorite.png';
import featuredmovie_1 from '../../../assets/featuredmovie_1.png'
import featuredmovie_2 from '../../../assets/featuredmovie_2.png'
import featuredmovie_3 from '../../../assets/featuredmovie_3.png'
import featuredmovie_4 from '../../../assets/featuredmovie_4.png'
import arrow_right from '../../../assets/arrow_right.png'
import arrow_left from '../../../assets/arrow_left.png'
import MovieCard from '../../../components/MovieCard/MovieCard';
import Spinner from '../../../components/Spinner/Spinner';


const FeaturedMovie = () => {

    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState([])
    const collectionRef = useRef();

    const arrowLeft = () => {
        let collection = collectionRef.current
        collection.scrollLeft -= 330
    }

    const arrowRight = () => {
        let collection = collectionRef.current
        collection.scrollLeft += 330
    }

    useEffect(() => {
        setLoading(true)
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=11d9d6e07330833dd9c9a8c9f0a0c184&language=en-US&page=1", {
            method: 'get'
        })
            .then(res => res.json())
            .then(data => {
                setMovies([...data.results])
            })
            .then(() => setLoading(false))
            .catch(error => console.log(error))
    }, [])

    console.log(movies)
    console.log(loading)

    const fetchedMovies = movies.map((movie)=>(
        <MovieCard key={movie.id} favorite_img={favorite} movie_img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} ratings_imdb={imdb} ratings_apple={apple} title={movie.title} rating_a={"78.0"} rating_b={"94"} genre={"Animation, Drama, History"} />
    ))



    return (
        <div className="max-wrapper standard__spacing--top">
            <div className="max-wrapper__content featured-movie">
                <div className="featured-movie__header">
                    <h1>Featured Movie</h1>
                    <span className="featured-movie__header--see-more">See more <span className="material-icons">chevron_right</span></span>
                </div>
                <div className="featured-movie__divider"></div>
                <div className="featured-movie__divider"></div>
                <div className="featured-movie__collection" ref={collectionRef}>
                    <div className="featured-movie__collection--arrow-left" onClick={arrowLeft}><img src={arrow_left} alt="arrow_left" /></div>
                    <div className="featured-movie__collection--arrow-right" onClick={arrowRight}><img src={arrow_right} alt="arrow_right" /></div>
                    <MovieCard favorite_img={favorite} movie_img={featuredmovie_1} ratings_imdb={imdb} ratings_apple={apple} title={"Stranger Things"} rating_a={"80.0"} rating_b={"97"} genre={"Action, Adventure, Horror"} tv_series={"TV SERIES"} />
                    <MovieCard favorite_img={favorite} movie_img={featuredmovie_2} ratings_imdb={imdb} ratings_apple={apple} title={"Batman Begins"} rating_a={"82.0"} rating_b={"70"} genre={"Action, Adventure"} />
                    <MovieCard favorite_img={favorite} movie_img={featuredmovie_3} ratings_imdb={imdb} ratings_apple={apple} title={"Spider-Man : Into The Spider Verse"} rating_a={"84.0"} rating_b={"87"} genre={"Animation, Action, Adventure"} />
                    <MovieCard favorite_img={favorite} movie_img={featuredmovie_4} ratings_imdb={imdb} ratings_apple={apple} title={"Dunkirk"} rating_a={"78.0"} rating_b={"94"} genre={"Animation, Drama, History"} />

                    {fetchedMovies}

                    {loading && <div className="featured-movie__collection--spinner"><Spinner /></div>}

                </div>
            </div>
        </div>
    )
}

export default FeaturedMovie