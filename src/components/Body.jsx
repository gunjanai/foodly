import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/context/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUserName, setUserName } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        setRestaurantList(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredRestaurant(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        console.log("json", json);
        console.log("res list", restaurantList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  const handleFilterClick = () => {
    setFilteredRestaurant(
      restaurantList.filter((res) => res.info.avgRating > 4.3)
    );
  };

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline! Please check your internet connection and
        try again.
      </h1>
    );

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center w-[100%] min-h-[100%] ">
      <div className="w-[80%]">
        <input
          type="text"
          className="border-black m-4"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search__button button"
          onClick={() => {
            const searchFilterRestaurantList = restaurantList.filter(
              (restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(searchFilterRestaurantList);
          }}
        >
          Search
        </button>
        <input
          className="mx-8 w-[35%] px-2"
          onChange={(e) => setUserName(e.target.value)}
          value={loggedInUserName}
          placeholder="Write something to see Context Working"
        />
        <h1 className="font-bold text-2xl  mx-4">
          Restaurants with online food delivery in Bangalore
        </h1>
        <button
          className=" border-2 border-solid rounded-3xl px-4 py-2 m-4 text-gray-800 shadow-lg "
          onClick={handleFilterClick}
        >
          Top Restaurants
        </button>
        <div className="flex flex-wrap justify-start items-stretch flex-col md:flex-row lg:flex-row">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
