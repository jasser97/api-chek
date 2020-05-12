import React from "react";

const UserItem = ({ item }) => {
  return (
    <div style={{ border: "2px black solid", margin: 10 }}>
      <h3> name: {item.name} </h3>
      <h3>username: {item.username} </h3>
      <h3>email: {item.email}</h3>
      <h3>{item.name} </h3>
      <h3> phoen: {item.phone} </h3>
      <h3>
        website:<a href={item.website}>{item.website}</a>
      </h3>
    </div>
  );
};

export default UserItem;
