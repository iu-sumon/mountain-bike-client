import { useEffect, useState } from 'react';

const useReviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {

        const url = '   https://evening-temple-70912.herokuapp.com/reviews'
        fetch(url, {
            method: 'GET',

            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return [reviews, setReviews]
};

export default useReviews;