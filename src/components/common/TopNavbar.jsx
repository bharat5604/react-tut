import React from "react";

const TopNavbar = () => {
  return (
    <div className="bg-blue-secondary px-5 py-4">
      <div className="flex justify-between text-white">
        <div className="flex gap-4">
          <p>Lorem ipsum dolor sit amet</p>
          <select name="" id="" className="w-72 text-black">
            <option value="">select</option>
            <option value="test">test</option>
            <option value="test">test</option>
          </select>
        </div>
        <div className="flex gap-4 text-white">
          <a href="#!" target="_blank">
            fb
          </a>
          <a href="#!" target="_blank">
            fb
          </a>
          <a href="#!" target="_blank">
            fb
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
