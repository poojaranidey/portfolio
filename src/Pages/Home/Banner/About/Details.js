import React from 'react';
import img from "../../../../images/myimg.jpg"

const Details = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-7">
                    <div className="custom_bg text-start text-light p-2">
                        <h4 style={{ fontFamily: "'Oswald', sans-serif" }}>Hi, I am Pooja Dey</h4>
                        <p>I am Pooja Rany Day graduated from Visvesvarya Technological University, karnataka,Bangalore,India.Besides I have been working with web development technologies since 1 year. I also have a course of 4 months on web development in Programming Hero. As you will see.And i am confident about React frontend developer with my skills
                            I have completed several projects using frontend technologies like React,React-Bootstrap,Tailwind,Firebase,and raw css.Besides i have few project with Mern technologies are Mongodb,Node,Express,Cors etc
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <img style={{ height: '80vh', objectFit: 'cover' }} src={img} alt="" className="w-100" />
                </div>
            </div>
        </div>
    );
};

export default Details;