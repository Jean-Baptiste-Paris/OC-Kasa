import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./styles.scss"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function Collapse({ CollapseTitle, collapseContent }) {
  const [isOpen, toggleCollapse] = useState(false)
  return (
    <div className="collapse">
      <button
        type="button"
        className="collapse__title"
        onClick={() => toggleCollapse(!isOpen)}
      >
        {CollapseTitle}
        <span>
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            className="collapse__title--icon"
          />
        </span>
      </button>
      <div
        className={
          "collapse__content " +
          (isOpen ? "collapse__content--open" : "collapse__content--closed")
        }
      >
        <p>{collapseContent}</p>
      </div>
    </div>
  )
}

export default Collapse
