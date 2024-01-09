// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner from './Banner/Banner';
import Sponsor from './Sponsor/Sponsor';
import Categories from './Categories/Categories';
import Brand from './Brand/Brand';
import Selling from './Selling/Selling';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sponsor></Sponsor>
            <Categories></Categories>
            <Brand></Brand>
            <Selling></Selling>
        </div>
    );
};

export default Home;