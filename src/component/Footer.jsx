import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-16 border-t border-[#3C404C] py-10">
      
      {/* MAIN CONTAINER SAME AS NAVBAR */}
      <div className="max-w-7xl mx-auto px-6 text-white text-center">

        {/* LOGO */}
        <a href="#" className="flex items-center justify-center gap-3 mb-4">
          <img
            src="https://www.svgrepo.com/show/499962/music.svg"
            className="h-10"
            alt="Logo"
          />
          <span className="text-2xl font-semibold">MovieMania</span>
        </a>

        {/* COPYRIGHT TEXT */}
        <p className="text-sm leading-6 max-w-md mx-auto">
          © {new Date().getFullYear()} <b>MovieMania™</b>. All Rights Reserved.
          <br />
          Built with{" "}
          <a href="https://flowbite.com" className="text-purple-400 hover:underline">
            Flowbite
          </a>{" "}
          and{" "}
          <a href="https://tailwindcss.com" className="text-purple-400 hover:underline">
            Tailwind CSS
          </a>.
        </p>

        {/* SOCIAL ICONS */}
        <ul className="flex justify-center mt-6 space-x-6">
          <li>
            <a href="#" className="hover:text-purple-300 transition">
              <i className="fa-brands fa-facebook text-xl"></i>
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-purple-300 transition">
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-purple-300 transition">
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-purple-300 transition">
              <i className="fa-brands fa-github text-xl"></i>
            </a>
          </li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;
