import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Name of website",
  description: "This is about us page meta description",
  keywords: "About, AI, Next.js",
  twitter: {
    card: "summary_large_image",
    title: "About Us | Twitter",
  },
};

export default function AboutPage() {
  return <h1>About Page</h1>;
}
