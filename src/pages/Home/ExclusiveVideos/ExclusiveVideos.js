import React, { useRef, useEffect, useState } from 'react'
import arrow_left from '../../../assets/arrow_left.png'
import arrow_right from '../../../assets/arrow_right.png'
import './ExclusiveVideos.scss';
import Spinner from '../../../components/Spinner/Spinner';

const ExclusiveVideos = () => {

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
        collection.scrollLeft += 350
    }

    useEffect(() => {
        let collection = collectionRef.current
        let arrow_right = arrowRightRef.current
        let arrow_left = arrowLeftRef.current

        collection.onscroll = () => {
            let rightScroll = collection.scrollLeft + collection.offsetWidth
            let leftScroll = collection.scrollLeft

            if (leftScroll > 0) {
                arrow_left.classList.remove("hide")
            } else {
                arrow_left.classList.add("hide")
            }

            if (rightScroll === collection.scrollWidth) {
                arrow_right.classList.add("hide")
            } else {
                arrow_right.classList.remove("hide")
            }
        }

        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=11d9d6e07330833dd9c9a8c9f0a0c184&language=en-US&page=${page}`, {
            method: 'get'
        })
            .then(res => res.json())
            .then(data => {
                setMovies((e) => [...e, ...data.results])
                arrow_right.classList.remove("hide")
            })
            .then(() => setLoading(false))
            .catch(error => console.log(error))
    }, [page])

    const seeMoreMovies = () => {
        if (page <= 500) {
            setPage((e) => e + 1)
        }
    }

    let fetchedMovies = movies.map((movie, index) => (
        <div className="exclusive" key={index}>
            <div className="exclusive__img">
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="exclusive__img--img" alt={movie.title} />
                <span class="material-icons exclusive__img--play">play_circle</span>
            </div>
            <h2 className="exclusive__caption">{movie.title}</h2>
        </div>
    ))


    return (
        <div className="max-wrapper standard__spacing--top">
            <div className="max-wrapper__content exclusive-videos">
                <div className="exclusive-videos__header">
                    <h1>Exclusive Videos</h1>
                    <span className="exclusive-videos__header--see-more" onClick={seeMoreMovies}>See more<span className="material-icons">chevron_right</span></span>
                </div>
                <div className="exclusive-videos__divider"></div>
                <div className="exclusive-videos__divider"></div>
                <div className="exclusive-videos__collection" ref={collectionRef}>
                    <div className="exclusive-videos__collection--arrow-left hide" ref={arrowLeftRef} onClick={arrowLeft}><img src={arrow_left} alt="arrow_left" /></div>
                    <div className="exclusive-videos__collection--arrow-right" ref={arrowRightRef} onClick={arrowRight}><img src={arrow_right} alt="arrow_right" /></div>
                    {fetchedMovies}
                    <div className="exclusive-videos__collection--spinner">{loading ? <Spinner /> : <span onClick={seeMoreMovies}>more...</span>}</div>
                </div>
            </div>
        </div>
    )
}

export default ExclusiveVideos