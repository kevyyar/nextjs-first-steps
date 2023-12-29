import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Contact Title",
  description: "SEO Contact Description",
};

export default function ContactPage() {
  return (
    <>
      <span className="text-3xl font-bold">Contact</span>
    </>
  );
}
