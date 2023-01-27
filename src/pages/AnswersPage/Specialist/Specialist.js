import React, {useEffect} from 'react';
import './specialist.css'
import photo from '../../../assets/specialist/photo.png'
import rosnepht from '../../../assets/specialist/rosnepht.png'
import bashnepht from '../../../assets/specialist/bashnepht.png'
import transnepht from '../../../assets/specialist/transnepht.png'
import gazprom from '../../../assets/specialist/gazprom.png'
import lukoil from '../../../assets/specialist/lukoil.png'
import tatnepht from '../../../assets/specialist/tatnepht.png'
import {Link, useNavigate} from "react-router-dom";
import SpecialistLogos from "./SpecialistLogos/SpecialistLogos";
import WOW from "wowjs";
const Specialist = () => {
    const navigate = useNavigate()
    const redirect = (e) => {
        e.preventDefault()
        navigate('/answersThanksPage')
    }
    useEffect(() => {
        new WOW.WOW().init();
    }, [])
    return (
        <section className="specialist">
            <div className="container">
                <div className="specialist__top">
                    <div className="specialist__left wow bounceInLeft">
                        <h2 className="title title__white">Не нашли ответа на свой <br/> вопрос? Задайте их нашему <br/> специалисту </h2>
                        <form onSubmit={redirect} className="specialist__form">
                            <input required className="input specialist__input" type="text" placeholder="Имя"/>
                            <input required className="input specialist__input" type="number" placeholder="Телефон"/>
                            <input required className="input specialist__input" type="text" placeholder="Ваш вопрос"/>
                            <button type="submit" className="btn__small">Задать вопрос</button>
                        </form>
                    </div>
                    <img className="specialist__img wow bounceInRight" src={photo} alt=""/>
                </div>
                <div className="specialist__bottom">
                    <div className="specialist__logos">
                        <SpecialistLogos image={rosnepht}/>
                        <SpecialistLogos image={bashnepht}/>
                        <SpecialistLogos image={transnepht}/>
                        <SpecialistLogos image={gazprom}/>
                        <SpecialistLogos image={lukoil}/>
                        <SpecialistLogos image={tatnepht}/>
                    </div>
                    <h3 className="title">Закажи прямо сейчас и получи <br/>бесплатную установку телеметрии</h3>
                    <Link to="/orderPage"><button className="btn">Заказать газ</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Specialist;