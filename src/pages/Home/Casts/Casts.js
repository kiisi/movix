import React, { useRef, useState, useEffect } from 'react'
import './Casts.scss'
import arrow_right from '../../../assets/arrow_right.png'
import arrow_left from '../../../assets/arrow_left.png'
import Spinner from '../../../components/Spinner/Spinner'

const Casts = () => {

    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [casts, setCasts] = useState([])
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
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=11d9d6e07330833dd9c9a8c9f0a0c184&language=en-US&page=${page}`, {
            method: 'get'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCasts((e) => [...e, ...data.results])
                arrow_right.classList.remove("hide")
            })
            .then(() => setLoading(false))
            .catch(error => console.log(error))
    }, [page])

    const seeMoreCasts = () => {
        if (page <= 500) {
            setPage((e) => e + 1)
        }
    }



    let fetchedCasts = casts.map((cast, index) => (
        <div className="cast" key={index}>
            <div className="cast__img">
                <img src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`} alt={cast.name} />
            </div>
            <div className="cast__caption">{cast.name}</div>
        </div>
    ))

    return (
        <div className="max-wrapper standard__spacing--top">
            <div className="max-wrapper__content featured-casts">
                <div className="featured-casts__header">
                    <h1>Featured Casts</h1>
                    <span className="featured-casts__header--see-more" onClick={seeMoreCasts}>See more<span className="material-icons">chevron_right</span></span>
                </div>
                <div className="featured-casts__divider"></div>
                <div className="featured-casts__divider"></div>
                <div className="featured-casts__collection" ref={collectionRef}>
                    <div className="featured-casts__collection--arrow-left hide" ref={arrowLeftRef} onClick={arrowLeft}><img src={arrow_left} alt="arrow_left" /></div>
                    <div className="featured-casts__collection--arrow-right" ref={arrowRightRef} onClick={arrowRight}><img src={arrow_right} alt="arrow_right" /></div>
                    {fetchedCasts}
                    <div className="featured-casts__collection--spinner">{loading ? <Spinner /> : <span onClick={seeMoreCasts}>more...</span>}</div>



                </div>
            </div>
        </div>
    )
}

export default Casts