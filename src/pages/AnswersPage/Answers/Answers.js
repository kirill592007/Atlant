import React from 'react';
import './answers.css'
import AnswersRow from "./AnswersRow/AnswersRow";
const Answers = () => {
    return (
        <section className="answers">
            <div className="container">
                <h2 className="title">Ответы на часто задаваемые вопросы</h2>
                <div className="answers__content">
                    <AnswersRow subtitle={'Есть ли у вас инженеры в компании?'} desc={'Да, много опытных и специализированных инженеров'}/>
                    <AnswersRow subtitle={'Делаете ли вы отчистку газгольдера?'} desc={'Да, и не только очистку, а множество других услуг'}/>
                    <AnswersRow subtitle={'А вы не испортите газон у меня и соседей?'} desc={'За счёт длинны в 50 м. делаем заправку не заезжая и не портим газон, а так же не мешаем соседям'}/>
                    <AnswersRow subtitle={'Вы предоставляете документы для субсидий?'} desc={'Да, предоставляем'}/>
                    <AnswersRow subtitle={'Смогу ли я заказать газ во время праздников?'} desc={'Конечно, ведь разные случаи бывают в жизни'}/>
                </div>
            </div>
        </section>
    );
};

export default Answers;