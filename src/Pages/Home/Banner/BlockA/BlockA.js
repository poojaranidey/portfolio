import React from 'react';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlockA = () => {
    return (
        <div className="custom_bg griD text-light my-2 p-3" style={{overflow:'hidden',borderRadius:'5px'}}>
            <Link className="text-decoration-none text-light" to="/home"><h5>Home</h5></Link> <br/>
            <Link className="text-decoration-none text-light" to="/about"><h5>About me</h5></Link><br/>
            <Link className="text-decoration-none text-light" to="/projects"><h5>Projects</h5></Link><br/>
            <Link className="text-decoration-none text-light" to="/skills"><h5>Skills</h5></Link><br/>
        </div>
    );
};

export default BlockA;