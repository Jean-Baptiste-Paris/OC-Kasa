import Banner from "../../components/Banner"
import bannerImage from "../../assets/images/banner-image-home.jpg"
import logements from "../../assets/data/logements.json"
import Grid from "../../components/Grid"

function Home() {
  const bannerMessage = "Chez vous, partout\u00A0et\u00A0ailleurs"
  return (
    <div className="Home page">
      <Banner bannerImage={bannerImage} bannerMessage={bannerMessage} />
      <Grid logements={logements} />
    </div>
  )
}

export default Home
