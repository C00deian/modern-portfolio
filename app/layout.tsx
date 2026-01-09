import type { Metadata } from "next";
import { primaryFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ritik Kumar | Full-Stack Developer",
  description: "Portfolio of Ritik Kumar – Full-Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={primaryFont.variable}>
      {/* Changed font-crimson to font-primary */}
      <body className="font-primary antialiased">
        {children}
      </body>
    </html>
  );
}