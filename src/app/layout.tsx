import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flavio Fox",
  description: "Personal portfolio of Flavio Fox, showcasing professional experience, projects, skills, and certifications.",
  keywords: ["Flavio Fox", "Portfolio", "Software Engineer", "Web Developer", "Full Stack"],
  authors: [{ name: "Flavio Fox" }],
  openGraph: {
    title: "Flavio Fox",
    description: "Digital Craftsman & Innovator building sophisticated web experiences.",
    url: "https://flaviofox.com",
    siteName: "Flavio Fox Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: "Flavio Fox Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#0a0a0c] text-white`}>
        {children}
      </body>
    </html>
  );
}
