import React from 'react';
import { Button } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import pdf from "../../../../Pooja Day-Resume.pdf";
import img from "../../../../images/myimg.jpg"

const MainBanner = () => {
    return (
        <div className="text-dark my-2 custom_bg" style={{ textAlign: 'justify', overflow: 'hidden', borderRadius: '5px' }}>
            <div className="row">
                <div className="col-md-7 p-5">
                    <h2 className="text-light" style={{ fontFamily: "'Oswald', sans-serif" }}>This is Pooja Dey, A Professional Frontend Developer</h2>
                    <div className="d-flex">

                        <Button variant="warning" href={pdf}>Download Resume</Button>
                    </div>
                </div>
                <div className="col-md-5">
                    <img className=" w-75" style={{ height: '70vh' }} src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MainBanner;