import React, { useEffect, useState } from 'react';
import { getStoredData, storedData } from '../LocalStorage/LocalStorage';
import { useLoaderData } from 'react-router-dom';
import DonationCard from '../DonationCard/DonationCard';

const Donation = (props) => {

    const [card,setCard] = useState([]);
    const [dataLength,setDataLength] = useState([4])
    
    

    const cards = useLoaderData();
    const id = getStoredData();

    useEffect(()=>{ 
    const myCard = cards.filter(card=> id.includes(card.id));
    
    setCard(myCard)
    
    },[])

  /*   console.log(card)  */
    
    
    
    
    
    
    

    return (
        <div>
         <div  className='grid grid-cols-3 gap-4'>
         {card.slice(0,dataLength).map(c=><DonationCard donation={c}></DonationCard>)}
         </div>
         <div className={dataLength === card.length && 'hidden'}>
         <button onClick={()=>setDataLength(card.length)} className='bg-black text-white rounded p-2'>Show More</button>
         </div>
        
        </div>
    );
};

export default Donation;