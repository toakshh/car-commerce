import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "CarVerse",
  description: "Find your dream car. Vibe and drive with CarVerse",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} antialiased max-h-screen`}
        >
          <Header />
          <main className="flex min-h-full max-h-screen overflow-y-scroll overflow-x-hidden flex-col ">
            {children}
          </main>
          <footer className="bg-blue-100 py-8">
            Made in Next.js with ❤️
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
