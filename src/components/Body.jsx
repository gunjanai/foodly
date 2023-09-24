import RestaurantCard from "./RestaurantCard";
import restaurantData from '../utils/restaurantData'

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant__container">
                {
                    restaurantData.map(restaurant => (
                        <RestaurantCard restaurant={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;