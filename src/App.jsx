
import './App.css'
import HeroSection from './components/HeroSection'
import Nabbar from './components/Nabbar'
import SkillSection from './components/SkillSection'
import SubHeroSection from './components/SubHeroSection'

function App() {


  return (
    <>
     <div className="px-6 mt-2 mx-auto max-w-7xl">
     <Nabbar/>
     <HeroSection/>
     < SubHeroSection/>
     <SkillSection/>
     </div>
    
    </>
      
  )
}

export default App
