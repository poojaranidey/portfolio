import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const CoreSkills = () => {

    return (
        <div className="custom_bg">
            <p style={{ color: 'yellow' }}>html</p>
            <ProgressBar label={`${80}%`} variant="warning" now={40} /><br />
            <p style={{ color: 'yellow' }}>CSS</p>
            <ProgressBar variant="danger" now={70} /><br />
            <p style={{ color: 'yellow' }}>Bootstrap</p>
            <ProgressBar variant="secondary" now={60} /><br />
            <p style={{ color: 'yellow' }}>JavaScript</p>
            <ProgressBar variant="info" now={80} /><br />
            <p style={{ color: 'yellow' }}>React js</p>
            <ProgressBar label={`${90}%`} variant="primary" now={40} />
        </div>
    );
};

export default CoreSkills;