import "./Users.scss";
import React, { useState } from "react";
import { useDeleteUserMutation, useGetUsersQuery } from "../../context/api/userApi";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Users = () => {
  const [page, setPage] = useState(1);
  const limit = 4;
  const { data, isLoading } = useGetUsersQuery({ limit, page });
  const [deleteUserById] = useDeleteUserMutation();

  const handleChange = (event, value) => {
    setPage(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-list">
      {data?.payload?.map((user) => (
        <div key={user?._id} className="user-card">
          <div className="user-info">
            <h3>
              {user?.fname} {user?.lname}
            </h3>
            <p>Username: {user?.username}</p>
            <p>Budget: {user?.budget}$</p>
            <p>Gender: {user?.gender}</p>
            <button
              className="delete-button"
              onClick={() => deleteUserById(user?._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="pagination-container">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(data?.total / limit)}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
};

export default Users;
