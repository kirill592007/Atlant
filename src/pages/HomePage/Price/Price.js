import React, {useEffect} from 'react';
import WOW from 'wowjs'
import './price.css'
import truck from '../../../assets/price/truck.png'
import {Link} from "react-router-dom";
const Price = () => {
    useEffect(() => {
        new WOW.WOW().init();
    }, [])
    return (
        <section className="price">
            <div className="container">
                <h2 className="title price__title">Стоимость газа в ваш газгольдер сегодня</h2>
                <div className="price__content">
                    <div className="price__propane wow fadeInLeft">
                        <h3 className="title title__white">Пропан</h3>
                        <p className="price__subtitle">от 25 рублей за литр</p>
                        <p className="subtitle">Физически испарение <br/> происходит до -40 градусов, что <br/> позволяет использовать его в <br/> наших с вами погодных <br/> условиях</p>
                        <Link to="/orderPage"><button className="btn__small">Заказать</button></Link>
                    </div>
                    <div className="price__ratio wow fadeIn">
                        <p className="price__desc">Идеальное соотношение</p>
                        <div className="price__percent">
                            <div className="price__percent-left">
                                <p className="price__number">80%</p>
                                <p className="price__desc">пропана</p>
                            </div>
                            <div className="price__percent-right">
                                <p className="price__number">20%</p>
                                <p className="price__desc">бутана</p>
                            </div>
                        </div>
                        <img src={truck} alt="truck"/>
                    </div>
                    <div className="price__butane wow fadeInRight">
                        <h3 className="title title__white">Бутан</h3>
                        <p className="price__subtitle">от 16 рублей за литр</p>
                        <p className="subtitle">Испарение Бутана происходит <br/> только до 0 градусов и годится <br/> для использования в тёплое <br/> время года</p>
                        <Link to="/orderPage"><button className="btn__small">Заказать</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;