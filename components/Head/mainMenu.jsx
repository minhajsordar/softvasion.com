"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainMenu() {

    const pathname = usePathname();

    const isActive = (path) => {
        return pathname === path ? 'nav-link active' : 'nav-link';
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg main_menu">
                <div className="container">
                    <Link className="navbar-brand text-center" href="/">
                        <h2 className="text-blue orbitron-700">SoftVasion</h2>
                    </Link>

                    {/* Mobile toggle button */}
                    {/* <button
                        className="navbar-toggler text-blue"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    {/* Collapsible menu */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            {/* <li className="nav-item">
                                <Link className={isActive("/")} href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={isActive("/about")} href="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={isActive("/service")} href="/service">Services</Link>
                            </li>
                            <li className="nav-item">
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

                        <ul className="right_menu d-flex flex-wrap">
                            <li>
                                <Link className="cart_view" href="#">
                                    <img
                                        src="/assets/frontend/images/cart.svg"
                                        alt="cart-icon"
                                        className="img-fluid w-100"
                                    />
                                    <b>0</b>
                                </Link>
                            </li>
                            <li>
                                <Link href="/gate-Link-quote">ফ্রি কনসালটেশন</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
