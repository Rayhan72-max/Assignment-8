import React from 'react';
import { Link } from 'react-router-dom';
const DonationCard = ({donation}) => {

    const { id,title, picture, category, category_bg, card_bg, text_button_bg, description, price } = donation;

    

    

    return (
        <div>
            {/*card starts here */}
           <Link to ={`/donationdetails/${id}`}>
           <div className="card card-compact w-70 bg-base-100 shadow-xl">
                <figure><img src={picture}/></figure>
                <div className = "mt-2 justify-start">
                    <button style={{backgroundColor: `${category_bg}`, borderRadius: "0.25rem", width: "5rem",color:"white"}}>{category}</button>
                    <p>{title}</p>
                    <p>{price}</p>
                    <div>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
           </Link>
        </div>
    );
};

export default DonationCard;