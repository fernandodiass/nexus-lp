import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus — Financial Intelligence Platform",
  description: "The institutional-grade financial intelligence platform trusted by the world's leading asset managers, family offices, and hedge funds.",
  openGraph: {
    title: "Nexus — Financial Intelligence Platform",
    description: "Real-time data, predictive analytics, and automated workflows in one command center.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
