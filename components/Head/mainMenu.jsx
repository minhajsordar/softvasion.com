"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function MainMenu() {

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

   
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const isActive = (path) => {
        return pathname === path ? 'nav-link active' : 'nav-link';
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg main_menu">
                <div className="container">
                    <div className="row w-100 flex-nowrap justify-between items-center">
                        <div className="col-6 col-md-3">
                            <Link className="navbar-brand text-center !w-[200px] !h-[40px]" href="/">
                                {/* <h2 className="text-blue orbitron-700">SoftVasion</h2> */}
                                <img className="!w-[250px] !h-[40px]" src="/assets/image/softvasion.svg" alt="" />
                            </Link>

                        </div>

                        <div className="hidden lg:block col-6">
                            <ul className="flex !justify-end !items-center !gap-2 navbar-nav me-auto mb-2">
                                <li className="nav-item">
                                    <Link className={isActive("/")} href="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={isActive("/about")} href="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={isActive("/service")} href="/service">Services</Link>
                                </li>
                                {/* <li className="nav-item">
                                <Link className={isActive("/products")} href="/products">Products</Link>
                            </li> */}
                                {/* <li className="nav-item dropdown">
                                <Link
                                    className={`${isActive("/page")} ropdown-toggle`}
                                    href="/page"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    পেইজ +
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="/page/project">আমাদের প্রোজেক্ট</Link></li>
                                    <li><Link className="dropdown-item" href="/page/package">আমাদের প্যাকেজ</Link></li>
                                    <li><Link className="dropdown-item" href="/page/team">আমাদের টিম</Link></li>
                                    <li><Link className="dropdown-item" href="/page/faq">এফএকিউ</Link></li>
                                    <li><Link className="dropdown-item" href="/page/blog">ব্লগ</Link></li>
                                </ul>
                            </li> */}
                                <li className="nav-item">
                                    <Link className={isActive("/contactus")} href="/contactus">Contact</Link>
                                </li>
                            </ul>

                            {/* <ul className="right_menu d-flex flex-wrap">
                            <li>
                                <Link href="/gate-Link-quote">  </Link>
                            </li>
                        </ul> */}
                        </div>
                        <div className="col-2 !text-end lg:hidden">
                            <button onClick={toggleMenu}>
                                <img
                                    src="/assets/image/menus.png"
                                    alt="menu icon"
                                    className="!w-8 !h-8"
                                />
                            </button>
                        </div>

                    </div>
                    <div className={`col-12 !h-[50vh] !mt-6 bg-amber-50  ${isOpen ? "block" : "hidden"}`}>
                        <ul className="!flex !flex-col !items-center !gap-5 !py-10 justify-center font-serif !font-semibold text-[#00156a] transform transition-transform duration-300 ease-in-out">
                            <li className="">
                                <Link className={isActive("/")} href="/">Home</Link>
                            </li>
                            <li className="">
                                <Link className={isActive("/about")} href="/about">About Us</Link>
                            </li>
                            <li className="">
                                <Link className={isActive("/service")} href="/service">Services</Link>
                            </li>

                            <li className="">
                                <Link className={isActive("/contactus")} href="/contactus">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* <div>
                        <div
                            className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out`}
                        >
                            <div className="p-5 flex justify-between items-center">
                                <h2 className="text-lg font-bold">Menu</h2>
                                <button onClick={toggleMenu} className="text-white text-2xl">
                                    ✕
                                </button>
                            </div>

                            <ul className="p-5 space-y-4">
                                <li><a href="#" className="hover:text-gray-400">Home</a></li>
                                <li><a href="#" className="hover:text-gray-400">About</a></li>
                                <li><a href="#" className="hover:text-gray-400">Services</a></li>
                                <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </nav>
        </>
    );
}
