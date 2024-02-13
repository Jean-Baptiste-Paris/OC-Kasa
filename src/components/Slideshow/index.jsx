import { useState } from "react"
import "./styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

function Slideshow({ images }) {
  const firstImage = images[0]
  const [currentImage, changeImage] = useState(firstImage)
  return (
    <div className="slideshow">
      {images.length > 1 && (
        <div className="slideshow__nav">
          <div className="slideshow__arrow slideshow__arrow--left">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className="slideshow__pagination"></div>
          <div className="slideshow__arrow slideshow__arrow--right">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      )}
      <img className="slideshow__image" src={currentImage} alt="logement"></img>
    </div>
  )
}

export default Slideshow
