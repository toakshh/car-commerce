import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

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
          className={`${inter.className} antialiased`}
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Toaster richColors />
          <footer className="bg-blue-100 py-8 px-10">
            Made in Next.js with ❤️
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
