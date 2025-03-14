"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/5 backdrop-blur-3xl fixed top-0 z-10 w-full py-3 px-4">
      <div className="lg:container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <p className="text-xl font-bold text-gray-100">Careerz</p>
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/about">
              <p className="text-gray-100">About</p>
            </Link>
            <Link href="/services">
              <p className="text-gray-100">Services</p>
            </Link>
            <Link href="/contact">
              <p className="text-gray-100">Contact</p>
            </Link>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-5">
            <ul className="space-y-4">
              <li>
                <Link href="/about">
                  <p className="text-gray-100">About</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p className="text-gray-100">Services</p>
                </Link>
              </li>
              <li></li>
              <li>
                <Link href="/contact">
                  <p className="text-gray-100">Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
