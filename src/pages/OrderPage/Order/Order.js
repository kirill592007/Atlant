import React, {useEffect, useState} from 'react';
import './order.css'
import truck1 from '../../../assets/order/truck1.png'
import truck2 from '../../../assets/order/truck2.png'
import truck3 from '../../../assets/order/truck3.png'
import truck4 from '../../../assets/order/truck4.png'
import {Link} from "react-router-dom";
import WOW from "wowjs";
const Order = () => {
    useEffect(() => {
        new WOW.WOW().init();
    }, [])
    const [info, setInfo] = useState(1)
    return (
        <section className="order">
            <h2 className="title wow bounceInDown">Выберите свой объём Газовоза</h2>
            <div className="order__buttons">
                <button onClick={() => setInfo(1)} className={`order__btn wow bounceInLeft ${info === 1 && 'order__btn-active'}`}>Малый <br/>2000 л.</button>
                <button onClick={() => setInfo(2)} className={`order__btn wow bounceInLeft ${info === 2 && 'order__btn-active'}`}>Средний <br/>6000 л.</button>
                <button onClick={() => setInfo(3)} className={`order__btn wow bounceInRight ${info === 3 && 'order__btn-active'}`}>Стандартный <br/>10 000 л.</button>
                <button onClick={() => setInfo(4)} className={`order__btn wow bounceInRight ${info === 4 && 'order__btn-active'}`}>Оптовый <br/>40 000 л.</button>
            </div>
            {
                info === 2 ? <img className="order__img" src={truck2} alt=""/> :
                    info === 3 ? <img className="order__img" src={truck3} alt=""/> :
                        info === 4 ? <img className="order__img" src={truck4} alt=""/> :
                            <img className="order__img wow bounceIn" src={truck1} alt=""/>
            }
            <Link to="/orderModalPage"><button className="btn wow bounceInUp">Заказать Газ</button></Link>
        </section>
    );
};

export default Order;