import React from 'react'
import './Casts.scss'
import arrow_right from '../../../assets/arrow_right.png'
import arrow_left from '../../../assets/arrow_left.png'
import cast_1 from '../../../assets/cast_1.png'
import cast_2 from '../../../assets/cast_2.png'
import cast_3 from '../../../assets/cast_3.png'
import cast_4 from '../../../assets/cast_4.png'

const Casts = () => {
  return (
    <div className="max-wrapper standard__spacing--top">
            <div className="max-wrapper__content featured-casts">
                <div className="featured-casts__header">
                    <h1>Featured Casts</h1>
                    <span className="featured-casts__header--see-more">See more<span className="material-icons">chevron_right</span></span>
                </div>
                <div className="featured-casts__divider"></div>
                <div className="featured-casts__divider"></div>
                <div className="featured-casts__collection">
                    <div className="featured-casts__collection--arrow-left"><img src={arrow_left} alt="arrow_left"/></div>
                    <div className="featured-casts__collection--arrow-right"><img src={arrow_right} alt="arrow_right"/></div>
                    <div className="cast">
                        <div className="cast__img">
                            <img src={cast_1} alt="Cast"/>
                        </div>
                        <div className="cast__caption">Keanu Reeves</div>
                    </div>
                    <div className="cast">
                        <div className="cast__img">
                            <img src={cast_2} alt="Cast"/>
                        </div>
                        <div className="cast__caption">Ryan Reynolds</div>
                    </div>
                    <div className="cast">
                        <div className="cast__img">
                            <img src={cast_3} alt="Cast"/>
                        </div>
                        <div className="cast__caption">Timothée Chalamet</div>
                    </div>
                    <div className="cast">
                        <div className="cast__img">
                            <img src={cast_4} alt="Cast"/>
                        </div>
                        <div className="cast__caption">Chloë Grace Moretz</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Casts