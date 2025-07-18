import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="p-4">
        {children}
      </body>
    </html>
  );
}
