import React from "react";
import "./UsersList.css";
const UserList = (props) => {
  const users = props.users.map((user) => (
    <li key={user.login.uuid}>
      <img
        className="thumbnail-foto"
        src={user.picture.thumbnail}
        alt={user.name.first}
      />
      {user.name.first}
      <p>{user.email}</p>
    </li>
  ));
  return <ul>{users}</ul>;
};

export default UserList;
