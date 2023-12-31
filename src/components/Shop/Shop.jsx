import React, { useEffect, useState } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
import Sho from "./Sho";


const Shop = () => {
  const [values, setValues] = useState([])

  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(data => setValues(data))
  }, [])

  return (
    <div className="pt-20 bg-white">
      <div className="flex items-center justify-center min-h-screen container mx auto ">
        {/* GRID START */}

        <div className="grid grid-cols-1 gap-10 md:grid-2 lg:grid-cols-4">

          {
              values.map(value=><Sho value = {value}></Sho>)
          }
        </div>
      </div>
    </div>
  );
};

export default Shop;
