import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const User = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const { state } = useLocation();
  console.log("state", state);
  useEffect(() => {
    setUser(state);
    // fetch(`${BASE_URL}/users/${id}`)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     // console.log(result);
    //     setUser(result);
    //   });
  }, []);
  return (
    <div className="shadow-lg rounded-lg border-2 p-4 text-center w-72">
      <h1>{user?.name}</h1>
      <p>{user?.username}</p>
      <p>{user?.email}</p>
      <p>{user?.phone}</p>
      <p>{user?.website}</p>
    </div>
  );
};

export default User;
