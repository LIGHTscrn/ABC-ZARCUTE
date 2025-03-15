import React from 'react';
import Navbar from "./Homepage/Navbar";
import FAQ from "./Homepage/FAQ";
import Footer from "./Homepage/Footer";
import Ls_0 from './Service/Ls_0';

export default function Livestream(){
    return(
        <>
            <Navbar />
            <Ls_0/>
            <FAQ />
            <Footer />
        </>
    );
}