import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IT Career Navigator",
  description:
    "Discover the IT career path that fits you, understand your skill level, find your gaps, and get projects to grow.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
