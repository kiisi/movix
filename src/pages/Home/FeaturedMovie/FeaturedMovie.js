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
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    const collectionRef = useRef();
    const arrowRightRef = useRef()
    const arrowLeftRef = useRef()

    const arrowLeft = () => {
        let collection = collectionRef.current
        collection.scrollLeft -= 330
    }

    const arrowRight = () => {
        let collection = collectionRef.current
        collection.scrollLeft += 330
    }

    useEffect(() => {
        let collection = collectionRef.current
        let arrow_right = arrowRightRef.current
        let arrow_left = arrowLeftRef.current

        collection.onscroll = () =>{
            let rightScroll = collection.scrollLeft + collection.offsetWidth
            let leftScroll = collection.scrollLeft
            
            if(leftScroll > 0){
                arrow_left.classList.remove("hide")
            }else{
                arrow_left.classList.add("hide")
            }

            if(rightScroll === collection.scrollWidth){
                arrow_right.classList.add("hide")
            }else{
                arrow_right.classList.remove("hide")
            }
        }
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
                    <h1>Featured Movie</h1>
                    <span className="featured-movie__header--see-more" onClick={seeMoreMovies}>See more <span className="material-icons">chevron_right</span></span>
                </div>
                <div className="featured-movie__divider"></div>
                <div className="featured-movie__divider"></div>
                <div className="featured-movie__collection" ref={collectionRef}>
                    <div className="featured-movie__collection--arrow-left hide" ref={arrowLeftRef} onClick={arrowLeft}><img src={arrow_left} alt="arrow_left" /></div>
                    <div className="featured-movie__collection--arrow-right" ref={arrowRightRef} onClick={arrowRight}><img src={arrow_right} alt="arrow_right" /></div>
                    <MovieCard favorite_img={favorite} movie_img={featuredmovie_1} ratings_imdb={imdb} ratings_apple={apple} title={"Stranger Things"} rating_a={"80.0"} rating_b={"97"} genre={"Action, Adventure, Horror"} tv_series={"TV SERIES"} />
                    <MovieCard favorite_img={favorite} movie_img={featuredmovie_2} ratings_imdb={imdb} ratings_apple={apple} title={"Batman Begins"} rating_a={"82.0"} rating_b={"70"} genre={"Action, Adventure"} />
                    <MovieCard favorite_img={favorite} movie_img={featuredmovie_3} ratings_imdb={imdb} ratings_apple={apple} title={"Spider-Man : Into The Spider Verse"} rating_a={"84.0"} rating_b={"87"} genre={"Animation, Action, Adventure"} />
                    <MovieCard favorite_img={favorite} movie_img={featuredmovie_4} ratings_imdb={imdb} ratings_apple={apple} title={"Dunkirk"} rating_a={"78.0"} rating_b={"94"} genre={"Animation, Drama, History"} />

                    {fetchedMovies}

                    <div className="featured-movie__collection--spinner">{loading ? <Spinner /> : <span onClick={seeMoreMovies}>more...</span>}</div>

                </div>
            </div>
        </div>
    )
}

export default FeaturedMovie