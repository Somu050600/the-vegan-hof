import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const Images1 = ({ slides }) => {

    const itemCount = 7;

    const [startItem, setStartItem] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        setStartItem((prevStartItem) => {
            let nextStartItem = prevStartItem + 1;
            if (nextStartItem > itemCount) {
                nextStartItem = 1;
            }
            setCurrentIndex(nextStartItem - 1);
            return nextStartItem;
        });
    };

    const handlePrevClick = () => {
        setStartItem((prevStartItem) => {
            let nextStartItem = prevStartItem - 1;
            if (nextStartItem < 1) {
                nextStartItem = itemCount;
            }
            setCurrentIndex(nextStartItem - 1);
            return nextStartItem;
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                handleNextClick();
            }
        }, 3500);

        return () => {
            clearInterval(interval);
        };
    }, [isPaused]);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <section className='slider-section' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <ul className="carousel">
                {Array.from({ length: itemCount }, (_, index) => {
                    const itemNumber = index + 1;
                    let positionClass = '';
                    if (itemNumber === startItem) {
                        positionClass = 'main-pos';
                    } else if (itemNumber === startItem - 1 || (startItem === 1 && itemNumber === itemCount)) {
                        positionClass = 'left-pos';
                    } else if (itemNumber === startItem + 1 || (startItem === itemCount && itemNumber === 1)) {
                        positionClass = 'right-pos';
                    } else {
                        positionClass = 'back-pos';
                    }

                    return (
                        <li className={`items ${positionClass}`} key={itemNumber}>
                            {itemNumber === 1 && (
                                <img src={process.env.PUBLIC_URL + slides[itemNumber - 1].url} alt="" />
                            )}
                            {itemNumber === 2 && (
                                <img src={process.env.PUBLIC_URL + slides[itemNumber - 1].url} alt="" />
                            )}
                            {itemNumber === 3 && (
                                <img src={process.env.PUBLIC_URL + slides[itemNumber - 1].url} alt="" />
                            )}
                            {itemNumber === 4 && (
                                <img src={process.env.PUBLIC_URL + slides[itemNumber - 1].url} alt="" />
                            )}
                            {itemNumber === 5 && (
                                <img src={process.env.PUBLIC_URL + slides[itemNumber - 1].url} alt="" />
                            )}
                            {itemNumber === 6 && (
                                <img src={process.env.PUBLIC_URL + slides[itemNumber - 1].url} alt="" />
                            )}
                            {itemNumber === 7 && (
                                <img src={process.env.PUBLIC_URL + slides[itemNumber - 1].url} alt="" />
                            )}
                        </li>
                    );
                })}
            </ul>
            <div>
                <div onClick={handlePrevClick} className="leftArrow">
                    ❰
                </div>
                <div onClick={handleNextClick} className="rightArrow">
                    ❱
                </div>
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
        </section>
    );
};

export default Images1;
