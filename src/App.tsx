import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Origenes from "./components/Origenes";
import Bandos from "./components/Bandos";
import Desarrollo from "./components/Desarrollo";
import Cronologia from "./components/Cronologia";
import Geografias from "./components/Geografias";
import Consecuencias from "./components/Consecuencias";
import Orden from "./components/Orden";
import Conclusion, { Footer } from "./components/Conclusion";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-300 antialiased">
      <Nav />
      <main>
        <Hero />
        <Origenes />
        <Bandos />
        <Desarrollo />
        <Cronologia />
        <Geografias />
        <Consecuencias />
        <Orden />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
}
