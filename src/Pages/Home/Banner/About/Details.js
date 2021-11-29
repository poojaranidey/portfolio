import React from 'react';

const Details = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-7">
                    <div className="custom_bg text-start text-light p-2">
                        <h4 style={{fontFamily:"'Oswald', sans-serif"}}>Hi, I am Bipul Chandro Roy</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nobis minima, aspernatur nam asperiores recusandae? Est soluta explicabo reprehenderit ratione sunt expedita nesciunt eius praesentium ex maiores dicta aspernatur, ipsam adipisci distinctio iusto itaque quis totam sed quos sequi vel suscipit, harum alias. Recusandae, modi doloremque? Magni ipsa enim dolores?</p>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <img style={{height:'50vh',objectFit:'cover'}} src="https://scontent.fdac66-1.fna.fbcdn.net/v/t39.30808-6/257233194_3007865882789535_1282226972124646804_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGM9En6mXdpKtTxYl-6vjy8qWst__KIub6pay3_8oi5vjluOh8mpJTj4Uo4EwkZSzGUU-wdiDhPPE3-xfT5C1Dn&_nc_ohc=wpzHI6I1f8IAX_-EO3n&tn=J8UzNSaO2_Gk4PD_&_nc_ht=scontent.fdac66-1.fna&oh=84a7a45fb8e1f53d7fceb5016376f8d6&oe=61A950B9" alt="" className="w-100" />
                </div>
            </div>
        </div>
    );
};

export default Details;