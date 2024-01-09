// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner from './Banner/Banner';
import Sponsor from './Sponsor/Sponsor';
import Categories from './Categories/Categories';
import Brand from './Brand/Brand';
import Selling from './Selling/Selling';
import Seller from './Seller/Seller';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-screen-xl mx-auto'>
                <Sponsor></Sponsor>
                <Categories></Categories>
                <Brand></Brand>
                <Selling></Selling>
                <Seller></Seller>
            </div>

        </div>
    );
};

export default Home;