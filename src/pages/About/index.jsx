import Banner from "../../components/Banner"
import bannerImage from "../../assets/images/banner-image-about.jpg"
import Collapse from "../../components/Collapse"

function About() {
  const contentPlaceholder = "Contenu à venir"
  const collapses = [
    { title: "Fiabilité", content: contentPlaceholder },
    { title: "Respect", content: contentPlaceholder },
    { title: "Service", content: contentPlaceholder },
    { title: "Sécurité", content: contentPlaceholder },
  ]
  return (
    <div className="About page">
      <Banner image={bannerImage} />
      {collapses.map(({ title, content }, index) => (
        <Collapse key={`${index}+${title}`} title={title}>
          {content}
        </Collapse>
      ))}
    </div>
  )
}

export default About
