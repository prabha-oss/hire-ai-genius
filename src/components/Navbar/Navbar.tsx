"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navItems = [
    { label: "Product", href: "/#how-it-works" },
    { label: "Talent", href: "/#talent-roles" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/#comparison" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
                <div className={styles.navbarContainer}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoIcon}>✦</span>
                        Hire AI Genius
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={styles.navLinks}>
                        {navItems.map((item) => (
                            <Link key={item.label} href={item.href} className={styles.navLink}>
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className={styles.navActions}>
                        <button className={styles.ctaButton}>Book Consultation</button>

                        {/* Mobile Menu Button */}
                        <button
                            className={styles.mobileMenuButton}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={styles.mobileNavLink}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {item.label}
                    </Link>
                ))}
                <button className={styles.ctaButton} style={{ display: "block" }}>
                    Book Consultation
                </button>
            </div>
        </>
    );
}
