import React from 'react';
import './thanks.css'
import {Link} from "react-router-dom";
const Thanks = () => {
    return (
        <section className="thanks">
            <div className="thanks__content">
                <h3 className="title">Спасибо за обращение</h3>
                <h4 className="title title__small"> наш специалист свяжется <br/>с вами в ближайшее время</h4>
                <Link to="/"><button className="btn">Вернуться на сайт</button></Link>
            </div>
        </section>
    );
};

export default Thanks;