import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant__container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

export default Body;