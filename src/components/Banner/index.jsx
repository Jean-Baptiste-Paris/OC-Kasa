import React from "react"
import "./styles.scss"

function Banner({ image, children }) {
  const bannerStyle = image && {
    backgroundImage: `url(${image})`,
  }
  return (
    <div className="banner" style={bannerStyle}>
      <div className="banner__content">{children}</div>
    </div>
  )
}

export default Banner
