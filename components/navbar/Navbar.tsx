import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "@/components";

const navLinks = [
  { text: "About", path: "/about" },
  { text: "Pricing", path: "/pricing" },
  { text: "Contact", path: "/contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 p-2 m-4 rounded bg-opacity-30">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navLinks.map((link) => (
        <ActiveLink key={link.path} {...link} />
      ))}
    </nav>
  );
};
