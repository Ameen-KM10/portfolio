import Home from "./pages/Home"
import Navbar from "./pages/NavBar"


function App() {

  return (
    <>
     <Navbar />
     <section id="home"><Home /></section>
      <section id="about" className="h-screen bg-bunker-900">About Section</section>
      <section id="services" className="h-screen bg-bunker-600">Services Section</section>
      <section id="contact" className="h-screen bg-bunker-400">Contact Section</section>
    </>
  )
}

export default App
