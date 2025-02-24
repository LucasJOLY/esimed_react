import React from "react";

function UserProfile({ name, age, job }) {
  return (
    <div>
      <p>Nom : {name}</p>
      <p>Age : {age}</p>
      <p>Profession : {job}</p>
    </div>
  );
}

export default UserProfile;
