import Hero from "./components/Hero";
import CartaEnfeiticada from "./components/CartaEnfeiticada";
import PocaoMusical from "./components/PocaoMusical";
import GaleriaMemorias from "./components/GaleriaMemorias";
import Rodape from "./components/Rodape";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CartaEnfeiticada />
      <PocaoMusical />
      <GaleriaMemorias />
      <Rodape />
    </div>
  );
}
