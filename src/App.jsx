import Home from "./pages/Home"
import Navbar from "./pages/NavBar"


function App() {

  return (
    <>
     <Navbar />
     <section id="home" className="h-screen bg-blue-100">Home Section</section>
      <section id="about" className="h-screen bg-green-100">About Section</section>
      <section id="services" className="h-screen bg-yellow-100">Services Section</section>
      <section id="contact" className="h-screen bg-pink-100">Contact Section</section>
    </>
  )
}

export default App
