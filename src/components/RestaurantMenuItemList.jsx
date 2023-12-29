import React from "react";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/slice/cartSlice";

function RestaurantMenuItemList({ items, calledFromCart }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => (
        <div
          className="flex justify-between my-12 border-b-2 pb-8"
          key={item?.card?.info?.id}
        >
          <div className="flex flex-col w-[70%]">
            <h1 className="font-medium ">{item?.card?.info?.name}</h1>
            <h1 className="font-medium my-2">
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </h1>
            <br />
            <span className="text-gray-400 text-xs">
              {item?.card?.info?.description}
            </span>
          </div>
          <div className="w-32 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0.1 p-6">
              {calledFromCart ? null : (
                <div>
                  <button
                    className="relative px-6 py-2 border border-gray-300 rounded-md text-xs bg-white text-green-500 whitespace-nowrap"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD
                  </button>
                </div>
              )}
            </div>
            <img
              className="w-32 h-24 rounded-lg"
              src={CLOUDINARY_IMAGE_URL + item?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurantMenuItemList;
