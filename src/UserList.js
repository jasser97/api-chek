import React, { useState, useEffect } from "react";
import UserItem from "./UserItem";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(result.data);
    };
    fetchData();
    console.log(users);
  }, [users]);
  return (
    <div>
      {users.map((item) => (
        <UserItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default UserList;
