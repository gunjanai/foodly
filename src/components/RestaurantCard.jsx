import restaurant1 from "../assets/restaurant1.jpg"

const RestaurantCard = ({restaurant}) => {
    return (
        <div className="restaurant__card">
            <img className="restaurant__image" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`} />
            <h3>
                {
                    restaurant.info.name
                }
            </h3>
        </div>
    )
}

export default RestaurantCard;