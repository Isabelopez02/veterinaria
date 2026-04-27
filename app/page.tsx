import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Nosotros from "./component/Nosotros";
import Servicios from "./component/Servicios";
import Staf from "./component/Staf";
import Redes from "./layout/Redes";

export default function Home() {
  return (
    <>
    <Redes />
    <main>
      <div>
        <Navbar/>
        <Hero/>
        <Nosotros/>
        <Servicios/>
        <Staf/>
      </div>
    </main>
    </>
  );
}
