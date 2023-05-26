import { useState } from "react";
import './ImageSlider.css'


const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionClass, setTransitionClass] = useState("");

    const goToPrevious = () => {
        setTransitionClass("translate-right");
        setTimeout(() => {
            const newIndex = (currentIndex - 1 + slides.length) % slides.length;
            setCurrentIndex(newIndex);
            setTransitionClass("");
        }, 500);
    };
    const goToNext = () => {
        setTransitionClass("translate-left");
        setTimeout(() => {
            const newIndex = (currentIndex + 1) % slides.length;
            setCurrentIndex(newIndex);
            setTransitionClass("");
        }, 500);
    };
    const getPreviousIndex = () => {
        return (currentIndex - 1 + slides.length) % slides.length;
    };

    const getNextIndex = () => {
        return (currentIndex + 1) % slides.length;
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
            <div className={`slider-images ${transitionClass}`}>
                <img src={process.env.PUBLIC_URL + slides[getPreviousIndex()].url} alt="" />
                <img src={process.env.PUBLIC_URL + slides[currentIndex].url} alt="" />
                <img src={process.env.PUBLIC_URL + slides[getNextIndex()].url} alt="" />
            </div>
            <div className="dots-container">
                {slides.map((slide, slideIndex) => (
                    <div
                        id={`dot-${slideIndex}`}
                        className={`dot-style ${currentIndex === slideIndex ? 'active' : ''}`}
                        key={slideIndex}
                        onClick={() => setCurrentIndex(slideIndex)}
                    >
                        —
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;