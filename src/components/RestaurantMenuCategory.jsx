import React, { useState } from "react";
import RestaurantMenuItemList from "./RestaurantMenuItemList";

function RestaurantMenuCategory({ category, active, onToggle }) {
  return (
    <div>
      <div
        className="font-bold w-[100%] flex justify-between my-8 cursor-pointer"
        onClick={onToggle}
      >
        <div>
          {category.title} ({category.itemCards.length})
        </div>
        <div>⬇️</div>
      </div>
      {active && <RestaurantMenuItemList items={category.itemCards} />}
    </div>
  );
}

export default RestaurantMenuCategory;
