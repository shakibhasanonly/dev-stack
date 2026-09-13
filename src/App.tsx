import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TechnologySection />
      </main>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;