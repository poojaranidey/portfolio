import React from 'react';
import BlockA from '../BlockA/BlockA';
import Profile from '../Profile/Profile';
import Socials from '../Socials/Socials';
import Chart from './Chart';
import CoreSkills from './CoreSkills';

const Skills = () => {
    return (
        <div>
            <div>
            <div className="banner">
            <div className="p-3">
                <div className="row Row">
                    <div className="col-12 col-md-3">
                        <Profile/>
                        <BlockA/>
                        <Socials/>
                    </div>
                    <div className="col-12 col-md-9 p-3">
                        <h1 className="text-light custom_bg p-3">My skills</h1>
                        <div className="row">
                            <div className="col-12 col-md-5">
                            <Chart/>
                            </div>
                            <div className="col-12 col-md-7">
                            <CoreSkills/>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Skills;