import Header from "./components/Header";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import SelectedWork from "./components/SelectedWork";

function App() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />
      <Showreel />
      <SelectedWork />
    </main>
  );
}

export default App;
