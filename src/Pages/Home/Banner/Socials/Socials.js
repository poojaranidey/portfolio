import React from 'react';
import { FaFacebook,FaWhatsapp,FaLinkedin,FaSkype,FaTwitterSquare } from "react-icons/fa";
const Socials = () => {
    return (
        <div>
            <div style={{borderRadius:'5px',overflow:'hidden'}} className="d-flex align-items-center justify-content-center">
                <div className="custom_bg text-light w-100 py-2">
                    <div className="p-5" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gridRowGap:'30px'}}>
                    <FaFacebook className="fs-4"/>
                    <FaWhatsapp className="fs-4"/>
                    <FaLinkedin className="fs-4"/>
                    <FaSkype className="fs-4"/>
                    <FaTwitterSquare className="fs-4"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Socials;