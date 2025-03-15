import React from 'react';
import Navbar from "./Homepage/Navbar";
import FAQ from "./Homepage/FAQ";
import Footer from "./Homepage/Footer";
import Ls_0 from './Service/Ls_0';
import Ls_1 from './Service/Ls_1';
import Ls_2 from './Service/Ls_2';

export default function Livestream(){
    return(
        <>
            <Navbar />
            <Ls_0/>
            <Ls_1/>
            <Ls_2/>
            <FAQ />
            <Footer />
        </>
    );
}