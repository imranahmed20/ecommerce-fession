// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner from './Banner/Banner';
import Sponsor from './Sponsor/Sponsor';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sponsor></Sponsor>
            <Categories></Categories>
        </div>
    );
};

export default Home;