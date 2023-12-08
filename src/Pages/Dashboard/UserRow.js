import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`    https://mountain-bike-server.vercel.app/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }

        return res.json();
      })

      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>

      <td>{email}</td>
      {/* je sob user a role:admin thakbe na tader button dekhabe  */}

      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        ) : (
          <button class="btn btn-xs btn-accent text-white">Admin</button>
        )}
      </td>

      <td>
        <button class="btn btn-xs btn-error text-white font-bold ">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
