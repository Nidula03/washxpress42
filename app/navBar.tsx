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
    <nav className="bg-[#0A74DA] px-8 py-6 flex justify-between items-center font-bold text-white">
      <h2 className="m-0 text-xl">WashXpress</h2>
      <div className="flex gap-5">
        <Link href="/" className="text-black">Home</Link>
        <Link
          href="/#services"
          className="text-black"
          onClick={(e) => handleScroll(e, "services")}
        >
          Services
        </Link>
        <Link
          href="/#about"
          className="text-black"
          onClick={(e) => handleScroll(e, "about")}
        >
          About
        </Link>
        <Link
          href="/#subscription-plan"
          className="text-black"
          onClick={(e) => handleScroll(e, "subscription-plan")}
        >
          Subscription
        </Link>
        <Link href="/contact" className="text-black">Contact</Link>
      </div>
    </nav>
  );
}
