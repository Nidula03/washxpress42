"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <nav className="bg-[#0A74DA] px-4 py-4 font-bold text-white">
      <div className="grid grid-cols-6 items-center text-black max-w-[900px] mx-auto">
        <Link href="/" className="justify-self-center">WashXpress</Link>
        <Link href="/" className="justify-self-center">Home</Link>
        <Link
          href="/#services"
          className="justify-self-center"
          onClick={(e) => handleScroll(e, "services")}
        >
          Services
        </Link>
        <Link
          href="/#about"
          className="justify-self-center"
          onClick={(e) => handleScroll(e, "about")}
        >
          About
        </Link>
        <Link
          href="/#subscription-plan"
          className="justify-self-center"
          onClick={(e) => handleScroll(e, "subscription-plan")}
        >
          Subscription
        </Link>
        <Link href="/contact" className="justify-self-center">Contact</Link>
      </div>
    </nav>
  );
}
