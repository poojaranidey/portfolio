import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const CoreSkills = () => {

    return (
        <div className="custom_bg">
            <ProgressBar label={`${40}%`} variant="warning" now={40} /><br />
            <ProgressBar variant="danger" now={20} /><br />
            <ProgressBar variant="secondary" now={60} /><br />
            <ProgressBar variant="secondary" now={80} /><br />
            <ProgressBar label={`${40}%`} variant="secondary" now={40} /><br />
            <ProgressBar variant="secondary" now={20} /><br />
            <ProgressBar variant="secondary" now={60} /><br />
            <ProgressBar variant="secondary" now={80} /><br />
            <ProgressBar label={`${40}%`} variant="secondary" now={40} /><br />
            <ProgressBar variant="secondary" now={20} /><br />
        </div>
    );
};

export default CoreSkills;