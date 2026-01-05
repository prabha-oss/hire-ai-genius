import styles from "./Footer.module.css";

const footerLinks = {
    product: [
        { label: "How It Works", href: "#how-it-works" },
        { label: "Vetting Process", href: "#solution" },
        { label: "Pricing", href: "#comparison" },
        { label: "Comparison Tool", href: "#comparison" },
    ],
    talent: [
        { label: "LLM Engineers", href: "#talent-roles" },
        { label: "MLOps Specialists", href: "#talent-roles" },
        { label: "Applied ML Engineers", href: "#talent-roles" },
        { label: "AI Research Engineers", href: "#talent-roles" },
        { label: "View All Roles →", href: "#talent-roles" },
    ],
    resources: [
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#case-studies" },
        { label: "2025 Hiring Guide", href: "#" },
        { label: "AI Salary Report", href: "#" },
    ],
    company: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press & Media", href: "#" },
        { label: "Partner Program", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerTop}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <div className={styles.logo}>
                            <span className={styles.logoIcon}>✦</span>
                            Hire AI Genius
                        </div>
                        <p className={styles.brandTagline}>
                            Not a staffing agency. A talent access infrastructure for AI
                            companies that need 99th percentile engineers without 100th
                            percentile overhead.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                in
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                𝕏
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="GitHub">
                                ⌘
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div className={styles.linkColumn}>
                        <h4>Product</h4>
                        <ul>
                            {footerLinks.product.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Talent */}
                    <div className={styles.linkColumn}>
                        <h4>Talent</h4>
                        <ul>
                            {footerLinks.talent.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className={styles.linkColumn}>
                        <h4>Resources</h4>
                        <ul>
                            {footerLinks.resources.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className={styles.linkColumn}>
                        <h4>Company</h4>
                        <ul>
                            {footerLinks.company.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.legalLinks}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                        <a href="#">SOC 2 Compliance</a>
                    </div>
                    <div className={styles.copyright}>
                        © 2025 Hire AI Genius, Inc. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
