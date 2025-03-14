import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const primary = Instrument_Serif({
  weight: "400",
  variable: "--font-primary",
  subsets: ["latin"],
});

const secondary = Inter({
  weight: ["400", "500", "700"],
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata = {
  title: "Careerz - Navigate Your Career Path With Confidence",
  description:
    "Personalized career counseling that helps you discover your potential, make informed decisions, and achieve professional success.",
  keywords:
    "career counseling, career coaching, career development, career guidance, career planning, career advice, career path, career change, career transition, job search, job interview, resume writing, cover letter, LinkedIn profile, professional networking, personal branding, professional development, professional success, careerz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${primary.variable} ${secondary.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
