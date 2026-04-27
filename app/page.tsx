
import Navbar from "./layout/Navbar";
import Hero from "./component/Hero";
import Nosotros from "./component/Nosotros";
import Servicios from "./component/Servicios";
import Staf from "./component/Staf";
import Redes from "./layout/Redes";
import Concentidos from "./component/Consentidos";
import Footer from "./layout/Footer";

export default function Home() {
  return (
    <>
    <main className="relative">
      <Navbar/>
      <Redes />
      <Hero/>
      <Nosotros/>
      <Servicios/>
      <Staf/>
      <Concentidos />
      <Footer/>
    </main>
    </>
  );
}
