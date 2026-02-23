import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";
import { LocaleProvider } from "@/lib/locale-context";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - Quiz Yoon",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-poppins), 'Pretendard Variable', Pretendard, sans-serif" }}
      >
        <LocaleProvider>
          <Sidebar />
          <div className="relative ml-0 flex min-h-screen flex-col items-start gap-12 overflow-x-hidden md:ml-[250px]">
            {children}
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
