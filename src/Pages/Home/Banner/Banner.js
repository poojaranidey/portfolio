import React from 'react';
import './Banner.css'
import BlockA from './BlockA/BlockA';
import MainBanner from './MainBanner/MainBanner';
import Profile from './Profile/Profile';
import Projects from './Projects/Projects';
import Socials from './Socials/Socials';
import Status from './Status/Status';
const Banner = () => {
    return (
        <div className="banner">
            <div className="p-3">
                <div className="row Row">
                    <div className="col-12 col-md-3">
                        <Profile/>
                        <BlockA/>
                        <Socials/>
                    </div>
                    <div className="col-12 col-md-9 p-3">
                        <MainBanner/>
                        <Status/>
                        <Projects/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;