import React from 'react';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Blog></Blog>
        </div>
    );
};

export default Home;