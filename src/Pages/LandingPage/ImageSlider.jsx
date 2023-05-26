import { useState } from "react";
import './ImageSlider.css'


const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
        setActiveIndex(slideIndex);
    };

    return (
        <div className="slider-style">
            <div>
                <div onClick={goToPrevious} className="leftArrow">
                    ❰
                </div>
                <div onClick={goToNext} className="rightArrow">
                    ❱
                </div>
            </div>
            <div className="slider-images">
                <img src={process.env.PUBLIC_URL + slides[currentIndex+1].url} alt="" />
                <img src={process.env.PUBLIC_URL + slides[currentIndex].url} alt="" />
                <img src={process.env.PUBLIC_URL + slides[currentIndex+2].url} alt="" />
            </div>
            <div className="dots-container">
                {slides.map((slide, slideIndex) => (
                    <div
                        id={`dot-${slideIndex}`}
                        className={`dot-style ${activeIndex === slideIndex ? 'active' : ''}`}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        —
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;