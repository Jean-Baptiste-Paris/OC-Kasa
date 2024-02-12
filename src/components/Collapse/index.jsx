import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./styles.scss"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function Collapse({ title, children }) {
  const [isOpen, toggleCollapse] = useState(false)
  return (
    <div className="collapse">
      <button
        type="button"
        className={
          "collapse__title " +
          (isOpen ? "collapse__title--open" : "collapse__title--closed")
        }
        onClick={() => toggleCollapse(!isOpen)}
      >
        {title}
        <span>
          <FontAwesomeIcon icon={faChevronUp} className="collapse__icon" />
        </span>
      </button>
      <div
        className={
          "collapse__content " +
          (isOpen ? "collapse__content--open" : "collapse__content--closed")
        }
      >
        {children}
      </div>
    </div>
  )
}

export default Collapse
