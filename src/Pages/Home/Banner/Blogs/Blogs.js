import React from 'react';
import BlockA from '../BlockA/BlockA';
import Profile from '../Profile/Profile';
import Socials from '../Socials/Socials';

const Blogs = () => {
    return (
        <div className="banner">
            <div className="p-3">
                <div className="row Row">
                    <div className="col-12 col-md-3">
                        <Profile />
                        <BlockA />
                        <Socials />
                    </div>
                    <div className="col-12 col-md-9 p-3">
                        <h1 className="text-light custom_bg p-3">Comming soon...</h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;