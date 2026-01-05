"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
    {
        question: "How does fractional talent reduce my \"adverse selection\" risk?",
        answer:
            "By providing pre-vetted AI practitioners on a flexible basis, you avoid the high-stakes \"marriage\" of full-time hires. Test the fit, validate the architecture, and scale commitment only after seeing real output. No 6-month onboarding gambles.",
    },
    {
        question: "What is \"Talent Arbitrage\" and why does it matter?",
        answer:
            "Access seniors at modular speeds. Big Tech locks up 70% of top AI talent with $300K+ offers. We work with proven engineers who choose fractional work for autonomy. You get 99th percentile output without 100th percentile overhead.",
    },
    {
        question: "Can we convert fractional talent to full-time later?",
        answer:
            "Yes, if mutual fit exists. Many clients start fractional to validate skill + culture, then extend full-time offers. We don't block conversions (no agency placement fees). Talent decides based on their career goals.",
    },
    {
        question: "How do you vet for production-readiness, not just theory?",
        answer:
            "Our screening evaluates: (1) Math/stats foundations via technical problems, (2) Systems thinking through architecture discussions, (3) Production experience via GitHub portfolios + deployed case studies. Only 3% pass. Agencies can't do this—they optimize for resume keywords.",
    },
    {
        question: "What if our AI roadmap changes mid-engagement?",
        answer:
            "Scale hours up/down weekly. Swap specialists if focus shifts (e.g., LLM → MLOps). No penalties. 2-week notice to adjust or exit. Fractional exists to absorb uncertainty, not create lock-in.",
    },
    {
        question: "How is pricing structured?",
        answer:
            "Transparent hourly or weekly retainer. No agency markups. Rates vary by seniority ($100-$200/hr range). Most clients start 20hrs/week, scale to 40 during sprints. Volume discounts for multi-role teams.",
    },
    {
        question: "Do you only work with AI-first startups?",
        answer:
            "No. We serve SaaS retrofits, enterprise pilots, and technical teams across Seed to F500. If bad AI talent = operational risk for you, we're built for that pain.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection} id="faq">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2>Questions Every Smart Buyer Asks</h2>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${openIndex === index ? styles.open : ""}`}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggleFaq(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <span className={styles.icon}>+</span>
                            </button>
                            <div className={styles.faqAnswer}>
                                <div className={styles.answerContent}>{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
