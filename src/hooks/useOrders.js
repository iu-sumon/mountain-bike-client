import { useEffect, useState } from 'react';

const useOrders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {

        const url = ' https://evening-temple-70912.herokuapp.com/orders'
        fetch(url, {
            method: 'GET',

            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])

    return [orders, setOrders]
};

export default useOrders;