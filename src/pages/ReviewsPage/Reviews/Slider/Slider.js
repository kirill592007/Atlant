import React, {useEffect, useState} from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './slider.css'
import axios from "axios";

const Slider = ({message}) => {

    const [slide, setSlide] = useState([])
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        axios('http://localhost:8080/swiper')
            .then(({data}) => setSlide(data))
    }, [message])
    const length = slide.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    if (!Array.isArray(slide) || slide.length <= 0) {
        return null;
    }
    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='arrow left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='arrow right-arrow' onClick={nextSlide} />
            {slide.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <div key={slide.id} className="reviews__content">
                                <img className="reviews__photo" src={slide.photo} alt=""/>
                                <div className="reviews__text">
                                    <h3 className="title title__small">{slide.name}</h3>
                                    <p className="reviews__subtitle">{slide.town}</p>
                                    <p className="subtitle">{slide.subtitle}</p>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default Slider;