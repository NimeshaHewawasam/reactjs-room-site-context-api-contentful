import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from "../components/Services";
import FeaturedRoom from '../components/FeaturedRoom';

export default function home () {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                <Link to='/rooms' className="btn-primary">Our rooms</Link>   
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRoom/>
        </React.Fragment>
    )
}
