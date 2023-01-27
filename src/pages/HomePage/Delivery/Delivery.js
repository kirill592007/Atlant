import React, {useEffect} from 'react';
import WOW from 'wowjs'
import './delivery.css'
import arrow from '../../../assets/delivery/arrow.svg'
import cloud from '../../../assets/delivery/cloud.svg'
import crescent from '../../../assets/delivery/crescent.svg'
import snowflake from '../../../assets/delivery/snowflake.svg'
import sun from '../../../assets/delivery/sun.svg'
import {Link} from "react-router-dom";
const Delivery = () => {
    useEffect(() => {
        new WOW.WOW().init();
    }, [])
    return (
        <section className="delivery">
            <div className="container">
                <div className="delivery__content">
                    <div className="delivery__time wow fadeInLeft">
                        <div className="delivery__time-left">
                            <div className="delivery__time-top">
                                <img src={crescent} alt=""/>
                                <img src={arrow} alt=""/>
                                <img src={sun} alt=""/>
                            </div>
                            <p className="subtitle">В любое время дня и ночи</p>
                        </div>
                        <div className="delivery__time-right">
                            <div className="delivery__time-top margin">
                                <img src={cloud} alt=""/>
                                <img src={arrow} alt=""/>
                                <img src={snowflake} alt=""/>
                            </div>
                            <p className="subtitle">Вне зависимости от погодных условий</p>
                        </div>
                    </div>
                    <h1 className="delivery__title wow fadeInLeft">Доставим газ <br/>за 4 часа</h1>
                    <p className="delivery__subtitle wow fadeInLeft">в любую точку Москвы <br/> и Московской области</p>
                    <Link to="/orderPage"><button className="btn wow fadeInLeft">Заказать доставку газа <br/> в газгольдер</button></Link>
                    <p className="subtitle delivery__desc wow fadeInLeft">Доставка газа всегда по актуальным ценам</p>
                </div>
            </div>
        </section>
    );
};

export default Delivery;