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
        let collection = collectionRef.current

        collection.onscroll = (e) => {
            const rightScroll = collection.scrollLeft + collection.offsetWidth

            if(rightScroll + 250 >= collection.scrollWidth){
                setLoading(true)
            }else{
                setLoading(false)
            }
        }
    }, [])



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
                    <MovieCard favorite_img={favorite} movie_img={featuredmovie_1} ratings_imdb={imdb} ratings_apple={apple} title={"Stranger Things"} rating_a={"80.0"} rating_b={"97"} genre={"Action, Adventure, Horror"} tv_series={"TV SERIES"}/>
                    <MovieCard favorite_img={favorite} movie_img={featuredmovie_2} ratings_imdb={imdb} ratings_apple={apple} title={"Batman Begins"} rating_a={"82.0"} rating_b={"70"} genre={"Action, Adventure"} />
                    <MovieCard favorite_img={favorite} movie_img={featuredmovie_3} ratings_imdb={imdb} ratings_apple={apple} title={"Spider-Man : Into The Spider Verse"} rating_a={"84.0"} rating_b={"87"} genre={"Animation, Action, Adventure"} />
                    <MovieCard favorite_img={favorite} movie_img={featuredmovie_4} ratings_imdb={imdb} ratings_apple={apple} title={"Dunkirk"} rating_a={"78.0"} rating_b={"94"} genre={"Animation, Drama, History"} />

                    
                    {loading && <div className="featured-movie__collection--spinner"><Spinner/></div> }

                </div>
            </div>
        </div>
    )
}

export default FeaturedMovie