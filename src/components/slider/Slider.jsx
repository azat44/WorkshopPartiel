import { useState } from 'react';
import styles from './Slider.module.css';

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const lastIndex = images.length - 1;
        const shouldResetIndex = currentIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const lastIndex = images.length - 1;
        const shouldResetIndex = currentIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className={styles.bullets}>
                <button onClick={prevSlide} className={styles.leftarrow}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#999999">
                    <path d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                {images.map((_, index) => (
                <span
                key={index}
                className={`${styles.bullet} ${currentIndex === index ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
                ></span>
                ))}
                <button onClick={nextSlide} className={styles.rightarrow}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#999999">
                    <path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
            </div>
            <div className={styles.carousel}>
            <div className={styles.carouselContent} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                <img key={index} src={image} alt={`Slide ${index}`} className={styles.slide} />
                ))}
            </div>
            </div>
        </>
    );
};

export default Slider;
