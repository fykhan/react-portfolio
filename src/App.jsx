import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, 
  Hero, Navbar, Tech, Projects
 } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
      <div className="max-w-7xl mx-auto relative">
          <About /> 
          <Tech />
          {/* <Experience /> */}
          <Projects />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
