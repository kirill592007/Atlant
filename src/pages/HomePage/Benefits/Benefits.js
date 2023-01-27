import React, {useEffect, useState} from 'react';
import './benefits.css'
import BG from '../../../assets/bg/benefitsbg.png'
import axios from "axios";
const Benefits = () => {
    const [benefits, setBenefits] = useState([])
    useEffect(() => {
        axios('http://localhost:8080/benefits')
            .then(({data}) => setBenefits(data))
    },[])
    return (
        <section className="benefits">
            <div className="container">
                <h2 className="title title__white">Преимущества работы с нашей компанией</h2>
                <div className="benefits__top">
                    {
                        benefits.map((item, idx) => (
                            <div key={idx} className="benefits__card">
                                <img className="benefits__img" src={item.image} alt=""/>
                                <h3 className="title__small benefits__title">{item.title}</h3>
                                <p className="subtitle">{item.subtitle}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="benefits__bottom">
                    <img src={BG} alt=""/>
                    <div className="benefits__text">
                        <p className="benefits__subtitle">Благодаря нашему <br/>собственному автопарку мы <br/> можем давать гарантию, что <br/> доставим<span className="benefits__subtitle benefits__subtitle-blue">за 4 часа</span></p>
                        <div className="benefits__sign">Это сильное конкурентное преимущество, которым мы дорожим</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;