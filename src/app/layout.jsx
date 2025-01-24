"use client";
import { AuthProvider } from "./AuthProvider";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="font-raleway">
          {/* Navbar */}
          <Navbar></Navbar>
          {/* Hero */}
          <div className="min-h-[calc(100vh-300px)]">
            {/* Dynamic Contents */}
            {children}
          </div>

          {/* Footer */}
          <Footer></Footer>
        </body>
      </html>
    </AuthProvider>
  );
}
