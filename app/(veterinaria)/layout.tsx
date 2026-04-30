
import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import Redes from "@/component/layout/Redes";

export default function layoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Redes />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
