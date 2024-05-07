import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import DonationCard from '../DonationCard/DonationCard';


const Home = () => {

    const donations = useLoaderData()

    

    return (
        <div>
            <div>
            <h1>I Grow by Helping People in Need</h1>
            <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
            <button className='bg-blue-500 rounded p-1'>Submit</button>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {
                donations.map(donation=><DonationCard key={donation.id} donation={donation}></DonationCard> )
                }
            </div>
        </div>
    );
};

export default Home;