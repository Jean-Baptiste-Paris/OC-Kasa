import Banner from "../../components/Banner"
import bannerImage from "../../assets/images/banner-image-home.jpg"

function Home() {
  const bannerMessage = "Chez vous, partout et ailleurs"
  return (
    <div className="Home">
      <Banner bannerImage={bannerImage} bannerMessage={bannerMessage} />
    </div>
  )
}

export default Home
