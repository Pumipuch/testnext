"use client"
import React, { useState } from "react";
import Link from "next/link";

export default function Index() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <nav className="bg-blue-500 p-1 sticky top-0">
                <div className="flex items-center justify-between">
                    <div><Link href="/"><img className="rounded-full m-2 hover:blur-sm " src="/her4.jpg" width={80} alt="logo"></img></Link></div>

                    {/* Toggle Menu Button */}
                    <div className="md:hidden">
                        <button id='menu-toggle' className="text-white" onClick={toggleMenu}>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                className="w-6 h-6">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <ul className="hidden md:flex space-x-4">
                        <li><Link className="text-white" href="/">HOME</Link></li>
                        <li><Link className="text-white" href="/about">ABOUT</Link></li>
                        <li><Link className="text-white mr-3" href="/products">PRODUCTS</Link></li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen ? (
                    <ul className="flex-col md:hidden ml-3">
                        <li><Link className="text-white" href="/">HOME</Link></li>
                        <li><Link className="text-white" href="/about">ABOUT</Link></li>
                        <li><Link className="text-white" href="/products">PRODUCTS</Link></li>
                    </ul>
                ) : null }
            </nav>
        </>
    )
}