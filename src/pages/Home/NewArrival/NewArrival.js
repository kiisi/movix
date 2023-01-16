import React, {useRef, useState, useEffect} from 'react'
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
import Spinner from '../../../components/Spinner/Spinner';

const NewArrival = () => {

    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    const collectionRef = useRef();

    const arrowLeft = () =>{
        let collection = collectionRef.current
        collection.scrollLeft -= 330
    }

    const arrowRight = () =>{
        let collection = collectionRef.current
        collection.scrollLeft += 330
    }

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=11d9d6e07330833dd9c9a8c9f0a0c184&language=en-US&page=${page}`, {
            method: 'get'
        })
            .then(res => res.json())
            .then(data => {
                setMovies((e) => [...e, ...data.results])
            })
            .then(() => setLoading(false))
            .catch(error => console.log(error))
    }, [page])

    const seeMoreMovies = () =>{
        if(page <= 500){
            setPage((e) => e + 1)
        }
    }

    const fetchedMovies = movies.map((movie, index)=>(
        <MovieCard key={index} favorite_img={favorite} movie_img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} ratings_imdb={imdb} ratings_apple={apple} title={movie.title} rating_a={"78.0"} rating_b={"94"} genre={"Animation, Drama, History"} />
    ))

    return (
        <div className="max-wrapper standard__spacing--top">
            <div className="max-wrapper__content featured-movie">
                <div className="featured-movie__header">
                    <h1>New Arrival</h1>
                    <span className="featured-movie__header--see-more"onClick={seeMoreMovies}>See more <span className="material-icons">chevron_right</span></span>
                </div>
                <div className="featured-movie__divider"></div>
                <div className="featured-movie__divider"></div>
                <div className="featured-movie__collection" ref={collectionRef}>
                    <div className="featured-movie__collection--arrow-left" onClick={arrowLeft}><img src={arrow_left} alt="arrow_left"/></div>
                    <div className="featured-movie__collection--arrow-right" onClick={arrowRight}><img src={arrow_right} alt="arrow_right"/></div>
                    <MovieCard favorite_img={favorite} movie_img={newarrival_1} ratings_imdb={imdb} ratings_apple={apple} title={"Dune"} rating_a={"80.0"} rating_b={"97"} genre={"Action, Adventure, Horror"} />
                    <MovieCard favorite_img={favorite} movie_img={newarrival_2} ratings_imdb={imdb} ratings_apple={apple} title={"No Time To Die"} rating_a={"82.0"} rating_b={"70"} genre={"Action, Adventure"}/>
                    <MovieCard favorite_img={favorite} movie_img={newarrival_3} ratings_imdb={imdb} ratings_apple={apple} title={"Shang-Chi and the Legend of the Ten Rings"} rating_a={"84.0"} rating_b={"87"} genre={"Animation, Action, Adventure"}/>
                    <MovieCard favorite_img={favorite} movie_img={newarrival_4} ratings_imdb={imdb} ratings_apple={apple} title={"Don't Breathe 2"} rating_a={"78.0"} rating_b={"94"} genre={"Animation, Drama, History"}/>
                    
                    {fetchedMovies}

                    <div className="featured-movie__collection--spinner">{loading ? <Spinner /> : <span onClick={seeMoreMovies}>more...</span>}</div>
                </div>
            </div>
        </div>
    )
}

export default NewArrival