import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const { resId } = useParams();

  const fetchMenuData = async () => {
    try {
      const data = await fetch(MENU_API_URL + resId);
      const json = await data.json();
      setResInfo(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

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
