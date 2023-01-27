import React from 'react';
import Delivery from "./Delivery/Delivery";
import Price from "./Price/Price";
import Benefits from "./Benefits/Benefits";
import Office from "./Office/Office";

const HomePage = () => {
    return (
        <div>
            <Delivery/>
            <Price/>
            <Benefits/>
            <Office/>
        </div>
    );
};

export default HomePage;