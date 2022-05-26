import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const DeletingModalParts = ({ parts, setParts }) => {

    const [user] = useAuthState(auth)

    const handleDeletePart = id => {

        const url = `   https://evening-temple-70912.herokuapp.com/part/${id}`;
        fetch(url, {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                const remaining = parts.filter(order => order._id !== id)
                setParts(remaining)
                toast('Deleted Successfully!')
            })
    }

    return (
        <div>
            {
                parts.map(part => <div key={part._id} >

                    <div>
                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 class="font-bold text-lg text-center">Hey! {user?.displayName}</h3>
                                <p class="py-4 text-center">Are you sure ? Delete this Parts!</p>
                                <div class="modal-action">
                                    <label
                                        onClick={() => handleDeletePart(part._id)}
                                        for="my-modal-6" class="btn btn-sm btn-error">Delete</label>
                                    <label for="my-modal-6" class="btn btn-sm">Cancel</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default DeletingModalParts;