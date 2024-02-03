import Banner from "../../components/Banner"
import bannerImage from "../../assets/images/banner-image-about.jpg"
import Collapse from "../../components/Collapse"

function About() {
  const contentPlaceholder = "Contenu à venir"
  return (
    <div className="About page">
      <Banner bannerImage={bannerImage} />
      <Collapse
        CollapseTitle="Fiabilité"
        collapseContent={contentPlaceholder}
      />
      <Collapse CollapseTitle="Respect" collapseContent={contentPlaceholder} />
      <Collapse CollapseTitle="Service" collapseContent={contentPlaceholder} />
      <Collapse CollapseTitle="Sécurité" collapseContent={contentPlaceholder} />
    </div>
  )
}

export default About
