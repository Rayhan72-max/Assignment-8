import React from 'react';
import {getStoredData,storedData} from '../LocalStorage/LocalStorage';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const DonationDetails = () => {

    const donations = useLoaderData()
    
    const {id} = useParams()
    
    const intId = parseInt(id)
    

    const donation = donations.find(donation=> donation.id === id);
    
    
    
    return (
        <div>
           {/*  donation cards */}

           <div className="card card-compact w-70 bg-base-100 shadow-xl">
                <figure><img src={donation.picture}/></figure>
                <div className = "mt-2 justify-start">
                    <button style={{backgroundColor: `${donation.category_bg}`, borderRadius: "0.25rem", width: "5rem",color:"white"}}>{donation.category}</button>
                    <p>{donation.description}</p>
                    <p>{donation.price}</p>
                    <div>
                        <button onClick={()=>storedData(id)} className="btn btn-primary">Donate</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DonationDetails;