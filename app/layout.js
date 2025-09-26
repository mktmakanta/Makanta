import { Inter, Karla } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Makanta dev | Frontend Developer",
  description:
    " Portfolio website of Makanta, a frontend developer specializing in React, Next.js, and modern web technologies.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Frontend Developer",
    "Web UI Engineer",
    "Accessibility",
    "SEO",
    "React",
    "Next.js",
    "Makanta Ibrahim",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${karla.variable} antialiased `}>
        <Navbar />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
