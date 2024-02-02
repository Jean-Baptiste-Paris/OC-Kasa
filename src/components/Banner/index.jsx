import React from "react"
import "./styles.scss"

function Banner({ bannerImage, bannerMessage }) {
  const bannerStyle = bannerImage && {
    backgroundImage: `url(${bannerImage})`,
  }
  return (
    <div className="banner" style={bannerStyle}>
      {bannerMessage && <p className="banner__message">{bannerMessage}</p>}
    </div>
  )
}

export default Banner
