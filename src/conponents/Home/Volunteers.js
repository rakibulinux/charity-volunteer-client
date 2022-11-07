import React from "react";

const Volunteers = ({ volunteer }) => {
  const { img, title, _id, price } = volunteer;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" className="h-64" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-between items-center">
          <span className="text-2xl">Price: ${price}</span>
          <button className="btn bg-pink-950 hover:bg-pink-600 border-none">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
