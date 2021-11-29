import React from 'react';

const Profile = () => {
    return (
        <div>
            <div style={{borderRadius:'5px',overflow:'hidden'}} className="d-flex align-items-center justify-content-center">
                <div className="custom_bg text-light w-100 py-2">
                <div className="mx-auto" style={{height:'70px',width:'70px',borderRadius:'100%',overflow:'hidden'}}>
                    <img className="w-100" src="https://scontent.fdac66-1.fna.fbcdn.net/v/t39.30808-6/257233194_3007865882789535_1282226972124646804_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGM9En6mXdpKtTxYl-6vjy8qWst__KIub6pay3_8oi5vjluOh8mpJTj4Uo4EwkZSzGUU-wdiDhPPE3-xfT5C1Dn&_nc_ohc=wpzHI6I1f8IAX_-EO3n&tn=J8UzNSaO2_Gk4PD_&_nc_ht=scontent.fdac66-1.fna&oh=84a7a45fb8e1f53d7fceb5016376f8d6&oe=61A950B9" alt="" />
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