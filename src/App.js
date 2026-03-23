import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Projects, StarsCanvas ,Certifications, Footer} from "./components";
import ProjectDetails from "./components/ProjectDetails";
import SkillsPage from "./components/SkillsPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        
        <Routes>
          {/* MAIN HOME PAGE */}
          <Route path="/" element={
            <>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Hero />
              </div>
              <About />
              <Experience />
              {/* <Tech /> */}
              <Projects /> 
              <Certifications />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </>
          } />

          {/* DETAILED PROJECT PAGE */}
         
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/project-details" element={<ProjectDetails />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;