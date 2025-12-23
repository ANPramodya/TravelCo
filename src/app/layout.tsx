import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import LenisProvider from "@/components/LenisProvider";

export const metadata = {
  verification: {
    google: "PHPe_JC_e6faIHnnxiyOs0x-7hk5aYz3dE4guIWq5Po",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <LenisProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
