import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TitleBar from "@/components/titleBar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RACV",
  description:
    "A Roblox account value claculator that claculates how many robux you have spent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen mx-auto border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TitleBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
