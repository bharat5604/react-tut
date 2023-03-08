import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  //   TODO: need to write logic here
  const handleClick = (item) => {
    const { id } = item;
    console.log(id);
    navigate(`/user/${id}`, { state: item });
  };

  //   useefeect
  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((item) => (
        <div
          className="shadow-lg rounded-lg border-2 p-4 text-center "
          key={item?.id}
        >
          <h1>Name: {item?.name}</h1>
          <p>Username: {item?.username}</p>
          <span>Email{item?.email}</span>
          <button
            type="button"
            className="block text-center underline mx-auto  bg-blue-secondary px-3 py-1 text-white capitalize"
            onClick={() => handleClick(item)}
          >
            Show More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
