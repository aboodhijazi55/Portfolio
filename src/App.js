import './App.css';
import { Hero, Navbar, About, Projects, Contact } from "./utils"

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>

    </>
  );
}

export default App;
