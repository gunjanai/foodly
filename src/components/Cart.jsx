import React from "react";
import RestaurantMenuItemList from "./RestaurantMenuItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/redux/slice/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col items-center w-[100%] min-h-[100%] mt-4">
      <div className="w-[80%]">
        <button
          onClick={handleClearCart}
          className="px-6 py-2 border border-gray-300 rounded-md text-xs bg-white text-green-500 whitespace-nowrap"
        >
          Clear cart
        </button>
        <RestaurantMenuItemList calledFromCart={true} items={cartItems} />
      </div>
    </div>
  );
}

export default Cart;
