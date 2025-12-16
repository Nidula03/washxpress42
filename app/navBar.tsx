import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-[#0A74DA] px-8 py-6 flex justify-between items-center font-bold text-white">
      <h2 className="m-0 text-xl">WashXpress</h2>
      <div className="flex gap-5">
        <Link href="/" className="text-black">Home</Link>
        <Link href="/services" className="text-black">Services</Link>
        <Link href="/about" className="text-black">About</Link>
        <Link href="/#subscription-plan" className="text-black">Subscription</Link>
        <Link href="/contact" className="text-black">Contact</Link>
      </div>
    </nav>
  );
}
