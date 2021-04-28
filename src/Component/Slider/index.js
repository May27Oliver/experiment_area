import React,{useState,useRef} from 'react';
import './index.moduel.css';
const Slider = () => {
    let slideIndex = 0;//當下圖片index
    let slides = [1,2,3,4,5];
    let picbox = slides.map((item)=>
        <div className="slider-slides">
            <img src={`https://picsum.photos/500/400?random=${item}`} />
        </div>
    )
    const ref = useRef();
    const swiper = (forword)=> {
        let WIDTH = 500;
        slideIndex++;
        let translatex = slideIndex * WIDTH;
        console.log('translateX',translatex);
        ref.current.style.transition = 'all .4s';
        ref.current.style.transform = `translateX(${translatex} + 'px')`;
        
    }
    return (
        <>
            <div className="slider-container">
                <div className="slider-wrapper" ref={ref}>
                    {picbox}
                </div>
            </div>
            <div className="button-panel">
                <button className="button button-left"
                    onClick={()=>swiper('left')}
                >
                    left
                </button>
                <button className="button button-right"
                    onClick={()=>swiper('right')}
                >
                    right
                </button>
            </div>
        </>
    )
}

export default Slider;