import React from 'react';
import Navbar from './Homepage/Navbar';
import Main1  from './Homepage/Main1';
import Services from './Homepage/Services';
import FAQ from './Homepage/FAQ';
import Footer from './Homepage/Footer';
import Chatbot from './Chatbot';
export default function Homepage() {
    return(
        <>
            <Navbar/>
            <Main1/>
            <Services/>
            <FAQ/>
            <Chatbot/>
            <Footer/>
        </>
    );
}