import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchMenuData from "../utils/hooks/useFetchMenuData";

function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useFetchMenuData(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, areaName, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <div>{cuisines.join(", ")}</div>
      <div>
        {areaName} <span>{costForTwoMessage}</span>
      </div>
      <div>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </li>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
