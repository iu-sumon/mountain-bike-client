import React from 'react';
import useParts from '../../hooks/useParts';
import AllPartsCard from './AllPartsCard';

const AllParts = () => {
    const [parts] = useParts()

    return (
        <div  className='w-[80%] mx-auto my-[80px]'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                {
                    parts.map(part => <AllPartsCard
                     part={part}
                     key={part._id}

                    ></AllPartsCard>)
                }
            </div>
        </div>
    );
};

export default AllParts;