import React from 'react';
import './office.css'
const Office = () => {
    return (
        <section className="office">
            <div className="container">
                <div className="office__content">
                    <div className="office__left">
                        <h2 className="title">Посетите наш <br/> уютный офис</h2>
                        <p className="office__subtitle border">где мы сможем вас полностью <br/> проконсультировать по всем вопросам</p>
                        <p className="office__subtitle office__subtitle-blue">Офис</p>
                        <p className="office__subtitle office__subtitle-margin">Видное, Белокаменное шоссе, 20</p>
                        <p className="office__subtitle office__subtitle-blue">Телефон:</p>
                        <p className="office__subtitle">+7 926 330-68-34</p>
                    </div>
                    <iframe className="office__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.134107968216!2d37.77037821547979!3d55.54745031527914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab0113b926911%3A0x38d9302dbc9b7c87!2z0JHQtdC70L7QutCw0LzQtdC90L3QvtC1INGILiwgMjAsINCS0LjQtNC90L7QtSwg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCAxNDI3MDM!5e0!3m2!1sru!2skg!4v1673345014487!5m2!1sru!2skg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">jk</iframe>
                </div>
            </div>
        </section>
    );
};

export default Office;