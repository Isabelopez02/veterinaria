import Navbar from "../layout/Navbar";
import Redes from "../layout/Redes";
import Footer from "../layout/Footer";

export default function StaffMedicoLayout({
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
