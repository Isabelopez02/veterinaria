import Navbar from "../../component/layout/Navbar";
import Redes from "../../component/layout/Redes";
import Footer from "../../component/layout/Footer";

export default function layoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Redes />
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
