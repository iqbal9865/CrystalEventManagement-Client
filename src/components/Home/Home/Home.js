import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BusinessDetails from '../BusinessDetails/BusinessDetails';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <BusinessDetails></BusinessDetails>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;