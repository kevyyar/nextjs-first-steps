import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO About Title",
  description: "SEO About Description",
  keywords: ["SEO", "Next.js"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-3xl font-bold">About</span>
    </>
  );
}
