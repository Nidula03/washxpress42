const Footer = () => {
  return (
    <footer className="bg-[#3674B5] text-black mt-12 py-10">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-6">

        <div className="max-w-xs mb-5">
          <h2 className="font-bold text-2xl mb-2">WashXpress</h2>
          <p>On-demand car wash service with flexible plans, real-time tracking.</p>
        </div>

        <div className="mb-5">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Pricing Plans</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div className="mb-5">
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>


        <div className="mb-5">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>📍 Colombo, Sri Lanka</p>
          <p>📞 +94 77 123 4567</p>
          <p>📧 support@washxpress.lk</p>
        </div>
      </div>

      <hr className="border-black my-5" />

      <p className="text-center opacity-80">
        © {new Date().getFullYear()} WashXpress. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;


