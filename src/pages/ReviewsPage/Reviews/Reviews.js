import React, {useEffect, useState} from 'react';
import './reviews.css'
import WOW from "wowjs";
import Slider from "./Slider/Slider";
import cross from "../../../assets/modal/cross.svg";
import axios from "axios";
const Reviews = () => {
    const [modal, setModal] = useState(0)
    const [message, setMesaage] = useState(0)

    useEffect(() => {
        new WOW.WOW().init();
    }, [])

    const addComment = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/swiper', {
            photo: "./reviews/photo.png",
            name: "Ольга И.",
            town: "Красногорск",
            subtitle: e.target[0].value
        })
            .then((res) => console.log(res))
        e.target[0].value = ''
        setModal(0)
        setMesaage(message + 1)
    }

    return (
            <section className="reviews">
                <h2 className="title title__white wow bounceInDown">Отзывы наших клиентов</h2>
                <Slider message={message}/>
                {
                   modal === 0 ? <button onClick={() => setModal(1)} className="btn__small">Оставить отзыв</button> :
                       <div className="modal__content">
                           <div className="modal__top">
                               <h3 className="title title__small">Оставьте свой отзыв здесь</h3>
                               <img className="cross" onClick={() => setModal(0)} src={cross} alt=""/>
                           </div>
                           <div className="modal__bottom">
                               <form onSubmit={addComment} className="modal__form">
                                   <input type="text" className="input" placeholder="Ваш Отзыв"/>
                                   <button className="btn">Отправить</button>
                               </form>
                           </div>
                       </div>
                }
            </section>
    );
};

export default Reviews;