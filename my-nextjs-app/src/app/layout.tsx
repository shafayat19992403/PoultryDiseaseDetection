import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="relative">
        <Navbar />
        {children}
        <footer className="flex-shrink-0 py-28 mt-10">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
