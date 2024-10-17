import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import background from "../../public/background.webp";
import { ThemeProvider } from "@/components/theme-provider";
import { SignInButton } from "@/components/sign-in";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
});

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash-display",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "leyline",
  description: "calendar stuff maybe",
};

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.className} ${clashDisplay.variable} antialiased min-h-full avif w-screen h-screen overflow-hidden items-center relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Image
            src={background}
            alt="Background"
            fill
            priority
            placeholder="blur"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              zIndex: -1,
            }}
          />
          <main className="w-screen h-screen overflow-hidden flex flex-col items-center relative">
            <div className="flex items-center justify-between w-full max-w-5xl my-6 px-10">
              <Link href="/">
                <h1 className="font-semibold font-clash text-2xl font-clashDisplay">
                  leyline
                </h1>
              </Link>
              <div className="flex items-center gap-6 font-medium text-sm">
                <SignInButton />
              </div>
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
