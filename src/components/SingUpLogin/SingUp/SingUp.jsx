import React from "react";
import "./SingUp.css";
import Star from "../../../assets/Star.png";

const SingUp = () => {
  return (
    <div className="pt-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 containers">
      <div className="flex justify-end">
        <img className="star mt-10" src={Star} />
      </div>
      <div className="flex">
        <h1 className="singUp">New User get up to <span className="text-8xl text-[#F90]">70%</span> OFF</h1>
        <img className="w-48 users	" src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
      </div>

      {/* From section */}

      <div className="flex justify-center mt-10">
        <div className="mt-10 mr-4">
          <p className="text-black font-semibold">Email</p>
          <input
            className="bg-white border-2 text-black font-semibold border-black rounded pr-40 py-2"
            placeholder="example@gmail.com"
            type="text"
          />
        </div>

        <div className="mt-10 ml-4">
          <p className="text-black font-semibold">Confirm Email</p>
          <input
            className="bg-white border-2 text-black font-semibold border-black rounded pr-40 py-2"
            placeholder="example@gmail.com"
            type="text"
          />
        </div>
      </div>

      {/* 2nd sec */}

      <div className="flex justify-center">
        <div className="mt-4 mr-4">
          <p className="text-black font-semibold">Mobile</p>
          <input
            className="bg-white border-2 text-black font-semibold border-black rounded pr-40 py-2"
            placeholder="+8801*********"
            type="number"
          />
        </div>

        <div className="mt-4 ml-4">
          <p className="text-black font-semibold">User Name</p>
          <input
            className="bg-white border-2 text-black font-semibold border-black rounded pr-40 py-2"
            placeholder="Abc123"
            type="text"
          />
        </div>
      </div>

      {/* 3rd sec */}

      <div className="mt-10">
        <p>*Password must 8 leters</p>
        <p>*Password can't 12345678</p>
        <p>*Must Use any 0 + A + a + !</p>
      </div>

      <div className="flex justify-center">
        <div className=" mr-4">
          <p className="text-black font-semibold">Password</p>
          <input
            className="bg-white border-2 text-black font-semibold border-black rounded pr-40 py-2"
            placeholder="********"
            type="password"
          />
        </div>

        <div className="mt-0 ml-4">
          <p className="text-black font-semibold">Confirm Password</p>
          <input
            className="bg-white border-2 text-black font-semibold border-black rounded pr-40 py-2"
            placeholder="********"
            type="password"
          />
        </div>
      </div>

      <div className="mt-5 mb-10">
        <input type="checkbox" /> Remember ME
      </div>

      <button type="button" className="mb-10 btn btn-secondary btn-block">
        Sing Up
      </button>
    </div>
  );
};

export default SingUp;
