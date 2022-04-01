import React from "react";
import Cards from "../components/Cards/Cards";

const Favourite = () => {
  const favouriteCards = [
    {
      id: "1",
      image: "https://unsplash.it/170/150",
      name: "Demo 1",
      status: "Alive",
      location: "pune",
    },
    {
      id: "2",
      image: "https://unsplash.it/170/150",
      name: "Demo 2",
      status: "Dead",
      location: "pune",
    },
  ];

  return (
    <div className="">
      {/* {favouriteCards.map((item, index) => {
        return <Cards results={item} key={index} />;
      })} */}
      {/* <Cards results={favouriteCards} /> */}
      <h3 className="text-center">Favorite Cards</h3>
    </div>
  );
};

export default Favourite;
