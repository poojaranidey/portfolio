import React from 'react';
import { Button } from 'react-bootstrap';
import Contact from '../Contact/Contact';

const MainBanner = () => {
    return (
        <div className="text-dark my-2 custom_bg" style={{height:'35vh',textAlign:'justify',overflow:'hidden',borderRadius:'5px'}}>
            <div className="row">
                <div className="col-md-7 p-5">
                    <h2 className="text-light" style={{fontFamily:"'Oswald', sans-serif"}}>This is pooja Roy, A Professional Frontend Developer</h2>
                    <div className="d-flex">
                    <Button>Download Resume</Button><Contact/>
                    </div>
                </div>
                <div className="col-md-5">
                    <img className="h-100 w-100" src="https://scontent.fdac66-1.fna.fbcdn.net/v/t39.30808-6/257233194_3007865882789535_1282226972124646804_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGM9En6mXdpKtTxYl-6vjy8qWst__KIub6pay3_8oi5vjluOh8mpJTj4Uo4EwkZSzGUU-wdiDhPPE3-xfT5C1Dn&_nc_ohc=wpzHI6I1f8IAX_-EO3n&tn=J8UzNSaO2_Gk4PD_&_nc_ht=scontent.fdac66-1.fna&oh=84a7a45fb8e1f53d7fceb5016376f8d6&oe=61A950B9" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MainBanner;