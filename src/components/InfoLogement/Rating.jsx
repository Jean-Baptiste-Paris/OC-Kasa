import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {range.map((rangeValue) => (
        <FontAwesomeIcon
          key={rangeValue}
          icon={faStar}
          className={`rating__icon ${
            rangeValue <= rating ? "rating__icon--active" : ""
          }`}
        />
      ))}
    </div>
  )
}

export default Rating
