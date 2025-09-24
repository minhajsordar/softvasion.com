"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export function MainMenu() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            containerRef.current &&
            !containerRef.current.contains(event.target) &&
            !event.target.closest("button") // toggle button বাদ
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // pathname পরিবর্তন হলে menu বন্ধ করবো
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const isActive = (path) => {
        return pathname === path ? "!text-blue-950" : "!text-gray-500";
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg main_menu relative">
                <div className="container">
                    <div className="row w-100 flex-nowrap justify-between items-center relative">
                        {/* Logo */}
                        <div className="col-6 col-md-3">
                            <Link
                                className="navbar-brand text-center !w-[200px] !h-[40px]"
                                href="/"
                            >
                                <img
                                    className="!w-[250px] !h-[40px]"
                                    src="/assets/image/softvasion.svg"
                                    alt="logo"
                                />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:block col-6">
                            <ul className="flex justify-end items-center gap-4 !font-[sans-serif] font-semibold">
                                <li>
                                    <Link
                                        className={`${isActive("/")} !hover:text-[#00156a] transition-all duration-200 transform hover:scale-105`}
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`${isActive("/about.html")} !hover:text-[#00156a] transition-all duration-200 transform hover:scale-105`}
                                        href="/about.html"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`${isActive("/service.html")} !hover:text-[#00156a] transition-all duration-200 transform hover:scale-105`}
                                        href="/service.html"
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`${isActive("/contactus.html")} !hover:text-[#00156a] transition-all duration-200 transform hover:scale-105`}
                                        href="/contactus.html"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        {/* Mobile Menu Button */}
                        <div className="col-2 text-end lg:hidden">
                            <button onClick={toggleMenu}>
                                <img
                                    src="/assets/image/menus.svg"
                                    alt="menu icon"
                                    className="w-8 h-8"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div
                ref={containerRef}
                className={`lg:hidden w-full bg-white  ${isOpen ? "block" : "hidden"} absolute !z-50`}
            >
                <ul className="flex flex-col items-center gap-5 !py-6 font-semibold text-[#00156a] font-serif font-semibold">
                    <li>
                        <Link className={isActive("/")} href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={isActive("/about.html")} href="/about.html">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link className={isActive("/service.html")} href="/service.html">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link className={isActive("/contactus.html")} href="/contactus.html">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* <div className="banner_btn d-flex flex-wrap justify-center">
                    <Link href="/contactus.html" className="common_btn btn btn-primary me-3">
                        Get In Touch
                    </Link>
                </div> */}

            </div>
        </>
    );
}
