import React, {useRef} from 'react'
import arrow_left from '../../../assets/arrow_left.png'
import arrow_right from '../../../assets/arrow_right.png'
import lamb from '../../../assets/lamb.png'
import suicide from '../../../assets/suicide.png'
import './ExclusiveVideos.scss';

const ExclusiveVideos = () => {

  let collectionRef = useRef();

    const arrowLeft = () =>{
        let collection = collectionRef.current
        collection.scrollLeft -= 330
    }

    const arrowRight = () =>{
        let collection = collectionRef.current
        collection.scrollLeft += 330
    }


  return (
    <div className="max-wrapper standard__spacing--top">
            <div className="max-wrapper__content exclusive-videos">
                <div className="exclusive-videos__header">
                    <h1>Exclusive Videos</h1>
                    <span className="exclusive-videos__header--see-more">See more<span className="material-icons">chevron_right</span></span>
                </div>
                <div className="exclusive-videos__divider"></div>
                <div className="exclusive-videos__divider"></div>
                <div className="exclusive-videos__collection" ref={collectionRef}>
                    <div className="exclusive-videos__collection--arrow-left" onClick={arrowLeft}><img src={arrow_left} alt="arrow_left"/></div>
                    <div className="exclusive-videos__collection--arrow-right" onClick={arrowRight}><img src={arrow_right} alt="arrow_right"/></div>
                    <div className="exclusive">
                        <div className="exclusive__img">
                            <img src={lamb} alt="Cast"/>
                        </div>
                        <div className="exclusive__caption">Lamb (2021) Trailer</div>
                    </div>
                    <div className="exclusive">
                        <div className="exclusive__img">
                            <img src={suicide} alt="Cast"/>
                        </div>
                        <div className="exclusive__caption">The Suicide Squad : John Cena Interview</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ExclusiveVideos