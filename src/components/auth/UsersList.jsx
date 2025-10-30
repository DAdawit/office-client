// components/UserList.js
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, selectUsers } from "../store/usersSlice";
import { getUsers } from "@/services/auth/auth";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const { isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="user-list">
      <h2>User List</h2>
      <div className="controls">
        <button onClick={refetch} disabled={isLoading}>
          {isLoading ? "Loading..." : "Fetch Users"}
        </button>
        {isError && <div className="error">Error: {error.message}</div>}
      </div>

      {users.length > 0 ? (
        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Company: {user.company?.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No users found. Click "Fetch Users" to load data.</p>
        </div>
      )}
    </div>
  );
};

export default UserList;
