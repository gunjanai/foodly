import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="w-[100%] m-4 ">
      <img
        className="rounded-lg w-88 h-76 object-cover flex-grow-3 flex-shrink-1 md:w-48 md:h-32 "
        src={CLOUDINARY_IMAGE_URL + restaurant.info.cloudinaryImageId}
      />
      <div className="w-96 md:w-52 ">
        <h3 className="font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis ">
          {restaurant.info.name}
        </h3>
        <div className="font-bold">⭐️ {restaurant.info.avgRating}</div>

        <div className="text-slate-600 text-sm whitespace-nowrap overflow-hidden text-ellipsis ">
          {restaurant.info.cuisines.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
