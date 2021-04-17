import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;