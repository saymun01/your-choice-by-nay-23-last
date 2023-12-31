import React from "react";
import BoyImage from "../../assets/Boy image.png";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse mt-40">
          <div className="bg-[#FFE0B3] rounded-lg">
            <img
              src={BoyImage}
              className="max-w-sm rounded-lg shadow-2xl man"
            />
          </div>

          <div className="mr-40">
            <p className="py-6 text-[#F90]">
              Sale up to <span className="text-5xl">70% off💥</span>
            </p>
            <h1 className="text-5xl font-bold text-black">Best Brand</h1>

            <h1 className="text-5xl font-bold text-black">
              New Collection oN Your Choice
            </h1>

            <p className="py-6 text-black">
              Discover all the new arrivals of ready-to-wear collection.
            </p>
            <button className="btn btn-primary bg-[#F90]">
              
              <NavLink to="/shop">SHOP NOW</NavLink>
            </button>
          </div>
        </div>
      </div>

      {/* Flass Sell item */}

      <div className="FlasSell pt-4">
        <div>
          <p className="text-[#F90] text-3xl">FlashSale</p>
        </div>

        {/* Some item */}

        <div className="flex mt-10 pb-10">
          <div className="card card-compact w-72 bg-White border-2 border-black shadow-xl">
            <figure>
              <img
                src="https://static-01.daraz.com.bd/p/1faa5a43ff96ee2594277ce80a5608e0.jpg_400x400q75-product.jpg_.webp"
                alt="Sarri"
              />
            </figure>
            <div className="card-body">
              <p className="card-title text-black text-base">
                Unstitched Georgette Kameez 3 Pieces
              </p>
              <h2 className="text-[#F90] text-2xl">৳ 439</h2>
              <p className="text-black">
                <span className="strikethrough text-[#0000007a]">৳ 1,500</span>{" "}
                -70%
                <img
                  className="Freedelevery"
                  src="//laz-img-cdn.alicdn.com/tfs/TB1QTkMXG67gK0jSZFHXXa9jVXa-45-28.png"
                />
              </p>
              <div className="card-actions w-full">
                <Link to="/Contract"><button className="btn text-black bg-[#F90] ">
                  Buy Now
                </button></Link>
              </div>
            </div>
          </div>

          <div className="card card-compact w-72 bg-White border-2 border-black shadow-xl ml-4">
            <figure>
              <img
                src="https://static-01.daraz.com.bd/p/6462f4e915666c142017c20198f4ef6b.jpg_300x0q75.webp"
                alt="Sarri"
              />
            </figure>
            <div className="card-body">
              <p className="card-title text-black text-base">
                Indian UnstiTched Jorjet / Georgette Emboridery Work Shalwar
                Kameez Three Piece
              </p>
              <h2 className="text-[#F90] text-2xl">৳ 450</h2>
              <p className="text-black">
                <span className="strikethrough text-[#0000007a]">৳ 1,400</span>{" "}
                -70%
                <img
                  className="Freedelevery"
                  src="//laz-img-cdn.alicdn.com/tfs/TB1QTkMXG67gK0jSZFHXXa9jVXa-45-28.png"
                />
              </p>
              <div className="card-actions ">
                <button className="btn text-black bg-[#F90] w-full">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-72 bg-White border-2 border-black shadow-xl ml-4">
            <figure>
              <img src="https://static-01.daraz.com.bd/p/09b8288b9b6bcaaafd1340619234a269.jpg_300x0q75.webp" />
            </figure>
            <div className="card-body">
              <p className="card-title text-black text-base">
                Tissu Indian Stylish Unstitched Tissu Salwar Kamiz Four Piece 4
                Piece
              </p>
              <h2 className="text-[#F90] text-2xl">৳ 548</h2>
              <p className="text-black">
                <span className="strikethrough text-[#0000007a]">৳ 999</span>{" "}
                -45%
                <img
                  className="Freedelevery"
                  src="//laz-img-cdn.alicdn.com/tfs/TB1QTkMXG67gK0jSZFHXXa9jVXa-45-28.png"
                />
              </p>
              <div className="card-actions ">
                <button className="btn text-black bg-[#F90] w-full">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-72 bg-White border-2 border-black shadow-xl ml-4">
            <figure>
              <img
                src="https://static-01.daraz.com.bd/p/36cc4c6e2870dc478c7a9c9336571a88.jpg_300x0q75.webp"
                alt="Sarri"
              />
            </figure>
            <div className="card-body">
              <p className="card-title text-black text-base">
                Versatile -Choice and Remark -15 Pieces Rings Set for Women
                RN-0511
              </p>
              <h2 className="text-[#F90] text-2xl">৳ 99</h2>
              <p className="text-black">
                <span className="strikethrough text-[#0000007a]">৳ 150</span>{" "}
                -34%
                <img
                  className="Freedelevery"
                  src="//laz-img-cdn.alicdn.com/tfs/TB1QTkMXG67gK0jSZFHXXa9jVXa-45-28.png"
                />
              </p>
              <div className="card-actions ">
                <button className="btn text-black bg-[#F90] w-full">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-items-end mr-48 pb-20">
        <NavLink to ="/shop"><button className="btn text-black bg-[#F90] w-30">
            Buy More... </button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
