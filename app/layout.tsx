import "./globals.css";
import { Overlock } from "next/font/google";

const overlock = Overlock({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={overlock.className}>{children}</body>
    </html>
  );
}