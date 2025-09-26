"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import TextDecoration from "./TextDecoration";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Me", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 w-full z-50">
      <div className=" mx-auto  p-4 md:p-6 md:px-14">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={` font-karla tracking-widest font-medium ${
              isMenuOpen ? "text-white" : "text-gray-800"
            }`}
          >
            MAKANTA
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="   hover:text-gray-900  focus:outline-none text-sm"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X strokeWidth={1.25} className="w-7 h-7" />
            ) : (
              <Menu strokeWidth={1.25} className="w-7 h-7" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className=" absolute top-full left-0 right-0 h-[calc(100vh-60px)]  md:h-[calc(100vh-72px)]  bg-[#191A1E] border-b shadow-lg">
            <nav className="px-4 py-8 space-y-3 max-w-5xl mx-auto text-white font-karla grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="hidden lg:flex flex-col space-y-8 items-start">
                <div className="space-y-1">
                  <h1 className="text-orange-500 text-xs font-medium font-karla tracking-widest">
                    ADDRESS
                  </h1>
                  <ul className="text-lg ">
                    <li>59 Usman Maidariya Street,</li>
                    <li>Wadata Rd Bida,</li>
                    <li>Niger State,</li>
                    <li>Nigeria.</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <h1 className="text-orange-500 text-xs font-medium font-karla tracking-widest">
                    CONTACT
                  </h1>
                  <div className="text-lg space-y-2 ">
                    <Link
                      href="mailto:mktmakantamkt@gmail.com?subject=Work Inquiry&body=Hello, I want to contact you"
                      className="group relative flex  hre"
                    >
                      mktmakantamkt@gmail.com
                      <ArrowUpRight
                        strokeWidth={1.25}
                        size={18}
                        className="group-hover:translate-x-1 mt-2 ml-2 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                      <span className="absolute left-0 bottom-[-3px] h-[0.5px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                    <Link
                      href="https://wa.me/2348062482089"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex hre"
                    >
                      t.me/makanta
                      <ArrowUpRight
                        strokeWidth={1.25}
                        size={18}
                        className="group-hover:translate-x-1 mt-2 ml-2 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                      <span className="absolute left-0 bottom-[-3px] h-[0.5px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                  </div>
                </div>
                <div className="space-y-1">
                  <h1 className="text-orange-500 text-xs font-medium font-karla tracking-widest">
                    SOCIAL
                  </h1>
                  <div className="flex space-x-4 mt-4">
                    <Link href="https://github.com/mktmakanta" target="_blank">
                      <FaGithub className="size-6 hover:text-purple-600 transition-all duration-500" />
                    </Link>

                    <Link
                      href="https://www.linkedin.com/in/muhammad-ibrahim-a18764246"
                      target="_blank"
                    >
                      <FaLinkedin className="size-6 hover:text-sky-600 transition-all duration-500" />
                    </Link>

                    <Link
                      href="https://x.com/Makanta__?t=XGcb_3z0WNHfjXLAYdo3PA&s=08"
                      target="_blank"
                    >
                      <FaXTwitter className="size-6 hover:text-orange-200 transition-all duration-500" />
                    </Link>

                    <Link
                      href="mailto:mktmakantamkt@gmail.com?subject=Work Inquiry&body=Hello, I want to contact you"
                      target="_blank"
                    >
                      <HiOutlineMail className="size-6 hover:text-green-600 transition-all duration-500" />
                    </Link>
                  </div>
                </div>
                <div className="space-y-1">
                  <h1 className="text-orange-500 text-xs font-medium font-karla tracking-widest">
                    RESUME
                  </h1>
                  <Link
                    href="/Makanta Resume.pdf"
                    target="_blank"
                    className="text-lg group flex relative"
                  >
                    Open resume
                    <ArrowUpRight
                      strokeWidth={1.25}
                      size={18}
                      className="group-hover:translate-x-1 mt-2 group-hover:-translate-y-1 transition-transform duration-300"
                    />
                    <span className="absolute left-0 bottom-[-4px] h-[0.5px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                </div>

                <div className="mt-16 text-xs  font-inter  scale-125 font-extralight tracking-widest">
                  {" "}
                  © Ibrahim Makanta 2025
                </div>
              </div>
              <ul className=" flex flex-col space-y-12 items-end ">
                {navItems.map((item) => (
                  <li>
                    <Link
                      key={item.name}
                      href={item.href}
                      className="relative group block text-5xl font-karla font-semibold  text-white "
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-[-10px] h-[0.5px] w-0 bg-orange-500 transition-all duration-700 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}

                <Link
                  href="/Makanta Resume.pdf"
                  target="_blank"
                  className="relative mt-20 text-black md:hidden p-2 px-3 bg-orange-100 font-karla font-medium cursor-pointer  group"
                >
                  <span className="border border-white absolute p-2 px-3 top-0 left-0 w-full h-full translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-400  "></span>
                  Resume
                </Link>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
