import React from "react";
import Cards from "../components/Cards/Cards";

const Favourite = () => {
  let favouriteCard = [
    {
      id: "",
      image: "",
      name: "",
      status: "",
      location: "",
    },
  ];

  return (
    <div className="">
      {/* {favouriteCard.map((favCard, index) => {
        return <Cards key={index} />;
      })} */}
      <h3 className="text-center">Favorite Cards</h3>
    </div>
  );
};

export default Favourite;
