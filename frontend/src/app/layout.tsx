import type { Metadata } from "next";
import { Inter} from 'next/font/google'
import "./globals.css";

const inter = Inter ({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "DepGuard AI",
  description: "AI-powered dependency update intelligence for teams",
    icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="depguardai">
      <body className={`${inter.className} antialiased bg-base-200 h-full`}>
        {children}
      </body>
    </html>
  );
}
