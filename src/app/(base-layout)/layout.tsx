import "../globals.css";
import "@/styles/index.scss";
import { Inter } from "next/font/google";
import React from "react";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RongQi",
  description: "容器",
};

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
