import { CLOUDINARY_IMAGE_URL } from '../utils/constants'

const RestaurantCard = ({restaurant}) => {
    return (
        <div className="restaurant__card">
            <img className="restaurant__image" src={CLOUDINARY_IMAGE_URL + restaurant.info.cloudinaryImageId} />
            <h3>
                {
                    restaurant.info.name
                }
            </h3>
            <div>
                {
                    restaurant.info.cuisines.join(", ")
                }
            </div>
            <div>
                {
                    restaurant.info.avgRating
                }
            </div>
        </div>
    )
}

export default RestaurantCard;