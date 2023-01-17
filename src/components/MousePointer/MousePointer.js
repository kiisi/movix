import React, {useRef, useEffect} from 'react'
import './MousePointer.scss'
const MousePointer = () => {

    const mousepointerRef = useRef()

    useEffect(()=>{
        const mousepointer = mousepointerRef.current
        window.addEventListener("mousemove", (event)=>{
            let x = event.clientX - 8
            let y = event.clientY - 8

            mousepointer.style.left = x + 'px'
            mousepointer.style.top = y + 'px'
        })
    },[])

  return (
    <div className="mouse-pointer" ref={mousepointerRef}></div>
  )
}

export default MousePointer