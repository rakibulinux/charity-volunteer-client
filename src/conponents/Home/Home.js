import React, { useEffect, useState } from "react";
import Volunteers from "./Volunteers";
import vnetwork from "../../assets/images/vnetwork.jpg";

const Home = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/volunteer")
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);
  return (
    <div className="my-5">
      <div className="text-center">
        <input
          className="py-4 px-6 rounded-bl-3xl rounded-tl-3xl outline-pink-950"
          type="search"
          name="Search"
          id=""
          placeholder="Search..."
        />
        <button
          className="bg-pink-950 hover:bg-pink-600  py-4 px-6 rounded-br-3xl border-none rounded-tr-3xl text-white"
          type="submit"
        >
          Search
        </button>
      </div>
      <h1 className="text-5xl text-center">
        We grow by helping people in need.
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 w-[98%] mx-auto">
        {volunteers.map((volunteer) => (
          <Volunteers key={volunteer._id} volunteer={volunteer} />
        ))}
      </div>
      <div className="grid grid-cols-2 mx-4 gap-5">
        <img className="rounded-3xl" src={vnetwork} alt="" />
        <div className="ml-32">
          <h1 className="text-5xl">Who we are?</h1>
          <p className="font-semibold my-4 w-8/12">
            Sedac audio aliquet, fringilla audio eget, tincidunt nunc. Two
            aliquet pulvinar ante tempor etiam lacus eros.
          </p>
          <p className="w-8/12">
            The legal definition of a charitable organization (and of charity)
            varies between countries and in some instances regions of the
            country. The regulation, tax treatment, and manner in which charity
            law affects charitable organizations also vary.
          </p>
          <button className="btn bg-pink-950 rounded-3xl hover:bg-pink-600 border-none mt-10">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
