import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        setRestaurantList(
          json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredRestaurant(
          json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
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

  const handleFilterClick = () => {
    setRestaurantList(restaurantList.filter((res) => res.info.avgRating > 4));
  };

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search__container">
        <input
          type="text"
          className="search__input"
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
        <button className="filter button" onClick={handleFilterClick}>
          Top Restaurants
        </button>
      </div>

      <div className="restaurant__container">
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
  );
};

export default Body;
