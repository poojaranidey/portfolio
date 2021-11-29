import React from 'react';
import img from "../../../../images/myimg.jpg"

const Details = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-7">
                    <div className="custom_bg text-start text-light p-2">
                        <h4 style={{ fontFamily: "'Oswald', sans-serif" }}>Hi, I am Pooja Dey</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nobis minima, aspernatur nam asperiores recusandae? Est soluta explicabo reprehenderit ratione sunt expedita nesciunt eius praesentium ex maiores dicta aspernatur, ipsam adipisci distinctio iusto itaque quis totam sed quos sequi vel suscipit, harum alias. Recusandae, modi doloremque? Magni ipsa enim dolores?</p>
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