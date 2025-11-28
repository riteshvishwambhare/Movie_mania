import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-10 text-white  bg-transaparent border rounded-4xl border-[#3C404C] shadow-xl shadow-md mx-40">
      {/* Logo */}
      <a
        href="#"
        className="flex items-center justify-center mb-5 text-2xl font-semibold text-white mt-10 sticky"
      >
        <img
          src="https://www.svgrepo.com/show/499962/music.svg"
          className="h-12 mr-3 sm:h-9"
          alt="Logo"
        />
        MovieMania
      </a>

      {/* Copyright */}
      <p className="text-sm text-white">
        © {new Date().getFullYear()} MovieMania™. All Rights Reserved.
        <br />
        Built with{" "}
        <a href="https://flowbite.com" className="text-purple-600 hover:underline">
          Flowbite
        </a>{" "}
        and{" "}
        <a href="https://tailwindcss.com" className="text-purple-600 hover:underline">
          Tailwind CSS
        </a>.
      </p>

      {/* Social Icons */}
      <ul className="flex justify-center mt-5 space-x-5 text-white">
        {/* Facebook */}
        <li>
          <a href="#" className="hover:text-white">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.5V12h2.5V9.8c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.88h-2.33v6.99C18.35 21.13 22 16.99 22 12z" />
            </svg>
          </a>
        </li>

        {/* Instagram */}
        <li>
          <a href="#" className="hover:text-white">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm8.5 1.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5h8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6-1.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
            </svg>
          </a>
        </li>

        {/* Twitter */}
        <li>
          <a href="#" className="hover:text-white">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.29 20.25c7.55 0 11.68-6.25 11.68-11.67v-.53A8.36 8.36 0 0022 5.92a8.19 8.19 0 01-2.36.65 4.1 4.1 0 001.8-2.27 8.23 8.23 0 01-2.6 1A4.1 4.1 0 0011.8 8.1a11.65 11.65 0 01-8.46-4.29A4.1 4.1 0 005.1 9.29a4.07 4.07 0 01-1.86-.52v.05a4.1 4.1 0 003.29 4 4.09 4.09 0 01-1.85.07 4.11 4.11 0 003.83 2.85A8.24 8.24 0 012 18.4a11.62 11.62 0 006.29 1.85" />
            </svg>
          </a>
        </li>

        {/* GitHub */}
        <li>
          <a href="#" className="hover:text-white">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2A10 10 0 002 12a10 10 0 006.84 9.5c.5.1.68-.2.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.46-1.12-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.1 2.91.83.1-.65.35-1.1.64-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.44-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.6 9.6 0 015.01 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.21 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.3.68.92.68 1.85v2.75c0 .27.18.59.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
