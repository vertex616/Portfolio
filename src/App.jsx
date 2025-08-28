import LogoSection from './sections/LogoSection'
import NavBar from './components/NavBar'
import FeatureCards from './sections/FeatureCards'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import ExperienceSection from './sections/ExperienceSection'
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
    </>
  )
}

export default App