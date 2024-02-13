import { useState } from "react"
import "./styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

function Slideshow({ images }) {
  const [currentSlide, changeSlide] = useState(0)

  function nextSlide() {
    const newSlide = currentSlide + 1
    changeSlide(newSlide < images.length ? newSlide : 0)
  }
  function prevSlide() {
    const newSlide = currentSlide - 1
    changeSlide(newSlide >= 0 ? newSlide : images.length - 1)
  }

  return (
    <div className="slideshow">
      {images.length > 1 && (
        <div className="slideshow__nav">
          <div
            className="slideshow__arrow slideshow__arrow--left"
            onClick={prevSlide}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className="slideshow__pagination">
            {currentSlide + 1}/{images.length}
          </div>
          <div
            className="slideshow__arrow slideshow__arrow--right"
            onClick={nextSlide}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      )}
      <img
        className="slideshow__image"
        src={images[currentSlide]}
        alt="logement"
      ></img>
    </div>
  )
}

export default Slideshow
