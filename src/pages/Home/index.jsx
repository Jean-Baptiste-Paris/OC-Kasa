import Banner from "../../components/Banner"
import bannerImage from "../../assets/images/banner-image-home.jpg"

function Home() {
  const bannerMessage = "Chez vous, partout\u00A0et\u00A0ailleurs"
  return (
    <div className="Home">
      <Banner bannerImage={bannerImage} bannerMessage={bannerMessage} />
    </div>
  )
}

export default Home
