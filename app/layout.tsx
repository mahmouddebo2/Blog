import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogs for Mahmoud Derbala ",
  description: "Blogs for Mahmoud Derbala from projects ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
          <main className="max-w-2xl mx-auto px-4">{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
