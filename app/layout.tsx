import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "./provider/NextAuthSessionProvider";
import { ReduxProvider } from "./provider/ReduxProvider";
import { ThemeProvider } from "@/components/reuse/theme-provider"
import Navbar from "@/components/reuse/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dota 2 Store",
  description: "Dota 2 best store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="forest" lang="en">
      <meta
        name="google-site-verification"
        content="HiU8hwLO8ZCeDDv0lUP9zB2sgH-vZ4QX4oi2BAC72gs"
      />

          
      <NextAuthSessionProvider>
  
        <body className={inter.className}>
        <ThemeProvider
        
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          <Navbar/>
          {" "}
          <ReduxProvider>
          {children}
          </ReduxProvider>
          </ThemeProvider>
        </body>
  
      </NextAuthSessionProvider>
  
    </html>
  );
}
