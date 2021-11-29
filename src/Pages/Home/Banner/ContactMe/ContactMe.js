import React from 'react';
import { Form } from 'react-bootstrap';
import BlockA from '../BlockA/BlockA';
import Profile from '../Profile/Profile';
import Socials from '../Socials/Socials';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_pso2fpg', 'template_6v1ja2l', e.target, 'user_gFNSv5IR32dBmdzIv4cEJ').then(res => {
            e.target.name.value = "";
            e.target.message.value = "";
            e.target.user_email.value = "";

            console.log(res);
        }).catch(err => console.log(err));
    }

    return (
        <div>
            <div className="banner">
                <div className="p-3">
                    <div className="row Row">
                        <div className="col-12 col-md-3">
                            <Profile />
                            <BlockA />
                            <Socials />
                        </div>
                        <div className="col-12 col-md-9 p-3">


                            <section>
                                <div className="container my-2 py-2">
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-2 col-12">
                                            <div className="row">
                                                <div className="col-lg-12 col-12 p-3 contact-us">
                                                    <h2 className="text-black fw-bold text-center p-3">CONTACT<span
                                                        className="text-style">-ME</span>
                                                    </h2>

                                                </div>
                                            </div>
                                            <div className="row bg-dark pt-3 pb-3 mb-4">
                                                <div className="col-lg-12 text-info">
                                                    <h6>ADDRESS :</h6>
                                                </div>
                                                <div className="col-lg-4 col-4 text-info">
                                                    10 no. C,k ghosh road,
                                                    sankipara mohor road dewari bazar,Mymensingh.
                                                </div>
                                                <div className="col-lg-4 col-4">
                                                    <p className="m-0 text-danger"><i className="fa fa-phone-square" aria-hidden="true"></i>
                                                        +8801712345678
                                                    </p>
                                                    <p className="m-0 text-info"><i className="fa fa-envelope" aria-hidden="true"></i>
                                                        example@gmail.com
                                                    </p>
                                                </div>
                                                <div className="col-lg-4 col-4 address-icon text-center text-danger">
                                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div className="row bg-dark pb-3 mb-4">
                                                <div className="col-lg-12 ">
                                                    <form onSubmit={sendEmail}>
                                                        <div className="form-row mb-3">
                                                            <div className="col mb-2">
                                                                <label>name </label>
                                                                <input type="text" name="name"
                                                                    placeholder="your name :" className="form-control" />

                                                            </div>
                                                            <div className="col">
                                                                <label>Email </label>
                                                                <input type="email" name="user_email"
                                                                    placeholder="your email :" className="form-control" />
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Message</label>
                                                            <textarea
                                                                name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"
                                                                placeholder="Message :"></textarea>
                                                        </div>
                                                        <button type="submit" className="p-2 rounded-3 my-4 fw-bold text-black send-btn">Send</button>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactMe;