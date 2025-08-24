// import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="h-screen bg-bunker-900">
        About Section
      </section>
      <section id="services" className="h-screen bg-bunker-600">
        Services Section
      </section>
      <section id="contact" className="h-screen bg-bunker-400">
        Contact Section
      </section>
    </>
  );
}

export default App;
