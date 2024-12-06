import React, { useState, useEffect, useRef } from "react";

const Navbar = ({ onNavigate }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleNavClick = (section) => {
        onNavigate(section); // Calls the onNavigate function passed from App.jsx
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false); // Close mobile menu after navigation
        }
    };

    return (
        <header>
            <nav className="max-w-7xl mx-auto py-4 pe-4 sm:pe-8 lg:pe-10">
                <div className="flex justify-between gap-12 items-center h-16">
                    <div className="flex md:w-44 w-28 h-14 bg-black rounded-e-lg items-center justify-end px-6">
                        <a href="">
                            <img
                                src="https://storage.googleapis.com/foskin-storages/SPA-assets/img/foskin-logo.png"
                                alt="foskin-logo.png"
                                className="w-10 object-contain"
                            />
                        </a>
                    </div>

                    <div className="hidden md:flex justify-around w-full mx-4">
                        <a
                            href="#home"
                            className="text-lg font-semibold text-black hover:text-grey-500"
                            onClick={() => handleNavClick("home")}
                        >
                            Home
                        </a>
                        <a
                            href="#features"
                            className="text-lg font-semibold text-black hover:text-grey-500"
                            onClick={() => handleNavClick("features")}
                        >
                            Features
                        </a>

                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen((prev) => !prev)}
                                className="text-lg font-semibold text-black hover:text-grey-500 flex items-center"
                            >
                                About
                                <svg
                                    className="ml-1 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown Items */}
                            {isDropdownOpen && (
                                <div className="absolute bg-white border border-gray-200 rounded-lg shadow-md mt-2 w-32 z-20">
                                    <a
                                        href="#background"
                                        className="block px-4 py-2 text-black hover:bg-gray-200 font-semibold"
                                        onClick={() => handleNavClick("background")}
                                    >
                                        Background
                                    </a>
                                    <a
                                        href="#contact"
                                        className="block px-4 py-2 text-black hover:bg-gray-200 font-semibold"
                                        onClick={() => handleNavClick("contact")}
                                    >
                                        Contact Us
                                    </a>
                                    <a
                                        href="#contact"
                                        className="block px-4 py-2 text-black hover:bg-gray-200 font-semibold"
                                    >
                                        Social Media
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className="md:hidden flex items-center justify-center text-gray-500 hover:text-black focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4">
                        <a
                            href="#home"
                            className="block text-lg px-4 py-2 text-black hover:bg-gray-300 rounded-lg"
                            onClick={() => handleNavClick("home")}
                        >
                            Home
                        </a>
                        <a
                            href="#features"
                            className="block text-lg px-4 py-2 text-black hover:bg-gray-300 rounded-lg"
                            onClick={() => handleNavClick("features")}
                        >
                            Features
                        </a>
                        <a
                            href="#background"
                            className="block text-lg px-4 py-2 text-black hover:bg-gray-300 rounded-lg"
                            onClick={() => handleNavClick("background")}
                        >
                            Background
                        </a>
                        <a
                            href="#contact"
                            className="block text-lg px-4 py-2 text-black hover:bg-gray-300 rounded-lg"
                            onClick={() => handleNavClick("contact")}
                        >
                            Contact Us
                        </a>
                        <a
                            href="#contact"
                            className="block text-lg px-4 py-2 text-black hover:bg-gray-300 rounded-lg"
                        >
                            Social Media
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
