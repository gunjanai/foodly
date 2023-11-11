import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
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

  return restaurantList.length === 0 ? (
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
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
