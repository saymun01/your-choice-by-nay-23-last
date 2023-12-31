import React, { useState } from 'react';
import OrderReview from '../OrderReview/OrderReview';

const Sho = (props) => {
  console.log(props.value);
  const {img,name,price,id} = props.value
  const [anewFunction,setNewFunction] = useState()
  console.log(anewFunction)
  const handleCart=(id)=>{

    console.log(id)
  }

    return (
        <div>
            <div className="rounded-xl shadow-lg card h-[550px]">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img
                  className=""
                  src={img}
                />
              </div>

              <div className="">
                <h5 className="text-xl text-black md:text-xl font-medium mt-3">
                  {name}
                </h5>
                <h3 className="text-[#F90] text-3xl md:text-4xl mt-3">৳ {price}</h3>
                <div className="mb-5">
                  <p className="flex">
                    <span className="strikethrough text-[#0000007a]">
                      ৳ 1,500
                    </span>{" "}
                    -70%
                    <img
                      className="ml-2 w-10"
                      src="//laz-img-cdn.alicdn.com/tfs/TB1QTkMXG67gK0jSZFHXXa9jVXa-45-28.png"
                    />
                  </p>
                </div>

                <div className="bg-[#F90] py-2 px-8 rounded-lg text-center">

                    <a
                      href="#"
                      className="text-center  text-black font-semibold mt-5 mr-10 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                    >
                      Buy Now
                    </a>

                  <span className="text-black font-semibold text-xl">/</span>
                  <button onClick={()=>handleCart(id)}
                    href="#"
                    className="text-center  text-black font-semibold mt-5 ml-8 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                  >
                    Add Card
                  </button>
                  <div className='hidden'>
                  <OrderReview></OrderReview>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Sho;