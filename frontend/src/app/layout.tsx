import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PieChart from "@/components/PieChart";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import CandlestickChart from "@/components/CandlestickChart";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-center	bg-slate-300`}
      >
        <h1 className="lg:text-4xl md:text-2xl sm:text-lg text-center mb-[50px] ">
          Dashboard
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          <CandlestickChart />
          <LineChart />
          <BarChart />
          <PieChart />
          {children}
        </div>
      </body>
    </html>
  );
}
