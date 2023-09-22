import restaurant1 from "../assets/restaurant1.jpg"

const RestaurantCard = () => {
    return (
        <div className="restaurant__card">
            <img className="restaurant__image" src={restaurant1} />
            <span className="credits">Photo by <a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a> on <a href="https://unsplash.com/photos/eeqbbemH9-c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
            <h3>
                First Restaurant
            </h3>
        </div>
    )
}

export default RestaurantCard;