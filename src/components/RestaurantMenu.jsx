import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchMenuData from "../utils/hooks/useFetchMenuData";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useFetchMenuData(resId);

  const [showItems, setShowItems] = useState(-1);

  if (resInfo === null) {
    return <Shimmer />;
  }

  console.log(resInfo?.data);

  const {
    name,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const toggleAccordion = (index) => {
    if (showItems === index) {
      return setShowItems(-1);
    }
    setShowItems(index);
  };

  return (
    <div className=" w-[60%] m-auto">
      <div className="flex justify-between items-center my-8">
        <div className="flex flex-col">
          <h1 className="font-bold text-lg items-start mb-2">{name}</h1>
          <div className="text-gray-500 text-sm">{cuisines.join(", ")}</div>
          <div className="text-gray-500 text-sm">{areaName}</div>
        </div>
        <div className="flex flex-col border border-gray-200 justify-center items-center p-2 rounded-md shadow-sm">
          <span>{`⭐️ ${avgRating}`}</span>
          <span className=" border-t-2 pt-3 mt-3 text-xs text-gray-500">
            {totalRatingsString}
          </span>
        </div>
      </div>
      <span className="font-bold">{costForTwoMessage}</span>
      <div>
        {categories.map((category, i) => (
          <RestaurantMenuCategory
            key={i}
            category={category?.card?.card}
            active={showItems === i}
            onToggle={() => toggleAccordion(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
