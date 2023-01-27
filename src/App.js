import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom'
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import AnswersPage from "./pages/AnswersPage/AnswersPage";
import AnswersThanksPage from "./pages/AnswersThanksPage/AnswersThanksPage";
import HomePage from "./pages/HomePage/HomePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import OrderModalPage from "./pages/OrderModalPage/OrderModalPage";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
const App = () => {
    const location = useLocation()
    return (
        <div>
            {
                location.pathname === "/orderModalPage"
                || location.pathname === "/answersThanksPage"
                    ? '' : <Header/>
            }
            <main>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/orderPage" element={<OrderPage/>}/>
                    <Route path="/orderModalPage" element={<OrderModalPage/>}/>
                    <Route path="/reviewsPage" element={<ReviewsPage/>}/>
                    <Route path="/answersPage" element={<AnswersPage/>}/>
                    <Route path="/answersThanksPage" element={<AnswersThanksPage/>}/>
                </Routes>
            </main>
            {
                location.pathname === "/orderModalPage"
                || location.pathname === "/answersThanksPage"
                    ? '' : <Footer/>
            }
        </div>
    );
};

export default App;