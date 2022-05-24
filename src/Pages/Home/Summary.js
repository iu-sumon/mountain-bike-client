import React, { useState } from 'react';
import SummaryCard from './SummaryCard';
import dealers from '../../Assets/usericon/people.png'
import profit from '../../Assets/usericon/financial-profit.png'
import parts from '../../Assets/usericon/cog.png'
import reviews from '../../Assets/usericon/rating.png'
import image1 from '../../Assets/others/photo.jpg'


const Summary = () => {
    const [summaries] = useState([
        {
            id: 1,
            name: 'Dealers',
            icon: dealers,
            quantity: '200',
            plus:"+"
        },
        {
            id: 2,
            name: 'Annual Revenue',
            icon: profit,
            quantity: '125',
            plus:"M"
        },
        {
            id: 3,
            name: 'Parts',
            icon: parts,
            quantity: '300',
            plus:"+"
        },
        {
            id: 4,
            name: 'Reviews',
            icon: reviews,
            quantity: '234',
            plus:"+"
        }
    ]) 
    return (
       <div>
           <h1 className='text-3xl uppercase font-semibold text-primary mb-5 text-center'>Our Summary</h1>
            <div style={{backgroundImage: `url(${image1})`}} className='bg-cover md:h-screen p-12 flex justify-center items-center '>
          
          <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
              {
                  summaries.map(summary => <SummaryCard
                      key={summary.id}
                      summary={summary}
                  >

                  </SummaryCard>)
              }
          </div>
      </div>
       </div>
    );
};

export default Summary;

