import React from 'react';
import img from "../../../../images/myimg.jpg"

const Profile = () => {
    return (
        <div>
            <div style={{ borderRadius: '5px', overflow: 'hidden' }} className="d-flex align-items-center justify-content-center">
                <div className="custom_bg text-light w-100 py-2">
                    <div className="mx-auto" style={{ height: '70px', width: '70px', borderRadius: '100%', overflow: 'hidden' }}>
                        <img className="w-100" src={img} alt="" />
                    </div>
                    <h5>Pooja Dey</h5>
                    <p className="mb-0">Junior Frontend Developer</p>
                    <p className="mb-0">NASA, United Sates of America</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;