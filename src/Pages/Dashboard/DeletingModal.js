import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const DeletingModal = ({ orders, setOrders }) => {
  const [user] = useAuthState(auth);

  const handleDeleteOrder = (id) => {
    const url = `   https://mountain-bike-server.vercel.app/order/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = orders.filter((order) => order._id !== id);
        setOrders(remaining);
        toast("Deleted Successfully!");
      });
  };

  return (
    <div>
      {orders.map((order) => (
        <div key={order._id}>
          <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
              <div class="modal-box">
                <label
                  for="my-modal-6"
                  class="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 class="font-bold text-lg text-center">
                  Hey! {user?.displayName}
                </h3>
                <p class="py-4 text-center">
                  Are you sure ? Delete this order!
                </p>
                <div class="modal-action">
                  <label
                    onClick={() => handleDeleteOrder(order._id)}
                    for="my-modal-6"
                    class="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                  <label for="my-modal-6" class="btn btn-sm">
                    Cancel
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeletingModal;
