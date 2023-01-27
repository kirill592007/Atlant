import React, {useEffect, useState} from 'react';
import arrow from "../../../../assets/answers/arrow.png";
import WOW from "wowjs";
const AnswersRow = ({subtitle, desc}) => {
    useEffect(() => {
        new WOW.WOW().init();
    }, [])
    const [answer, setAnswer] = useState(1)
    return (
        <div className="answers__row wow bounceInLeft" onClick={() => answer === 1 ? setAnswer(2) : setAnswer(1)}>
            <div className="answers__row_text">
                {
                    answer === 2 ? <img className="answers__arrow" src={arrow} alt=""/> :
                        <img src={arrow} alt=""/>
                }
                <p className={`answers__subtitle ${answer === 2 && 'subtitle-active'}`}>{subtitle}</p>
            </div>
            {
                answer === 2 && <p className="subtitle">{desc}</p>
            }
        </div>
    );
};

export default AnswersRow;