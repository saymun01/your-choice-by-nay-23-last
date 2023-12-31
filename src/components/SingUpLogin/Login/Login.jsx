import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="pt-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="">
        <div className="w-48 user">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
            alt=""
          />
        </div>

        <div>
          <h1 className="login">Login User</h1>
        </div>

        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">
              <i
                className="fa fa-user-circle"
                style={{ fontSize: "110px" }}
              ></i>
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form>
              <div className="ml-96 pl-48">
                <div className="mt-4">
                  <p className="text-black font-semibold">User Name</p>
                  <input
                    className="bg-white border-2 text-black font-semibold border-black rounded pr-40 py-2"
                    placeholder="Abc123"
                    type="text"
                  />
                </div>

                <div className=" mr-4">
                  <p className="text-black font-semibold">Password</p>
                  <input
                    className="bg-white border-2 text-black font-semibold border-black rounded pr-40 py-2"
                    placeholder="********"
                    type="password"
                  />
                </div>
              </div>

              <div className="message ckBox flex">
                <div className="mr-20">
                  <input type="checkbox" /> Remember ME
                </div>

                <div>
                  <a href="#">Forgot your password</a>
                </div>
              </div>

              <button type="button" className="btn btn-secondary w-80 button">
                LOGIN
              </button>
            </form>
            <div className="social">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
