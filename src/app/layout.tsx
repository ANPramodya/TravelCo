import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import LenisProvider from "@/components/LenisProvider";

export const metadata = {
  verification: {
    google: "PHPe_JC_e6faIHnnxiyOs0x-7hk5aYz3dE4guIWq5Po",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
