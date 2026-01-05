import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                {/* Left Content */}
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>🚀 Fractional AI Talent Infrastructure</span>

                    <h1 className={styles.headline}>
                        Compress Your AI Hiring Risk with{" "}
                        <span className={styles.gradientText}>Fractional Talent Arbitrage</span>
                    </h1>

                    <p className={styles.subheadline}>
                        In a 3.2:1 demand-supply gap, deploy 99th percentile LLM engineers
                        in 14 days. Scale without the $300K bad-hire burn—or runway-killing
                        commitments.
                    </p>

                    <div className={styles.ctaGroup}>
                        <button className={styles.primaryCta}>
                            Execute Your AI Strategy
                            <span>→</span>
                        </button>
                        <a className={styles.secondaryCta}>
                            📥 Download Cost Breakdown
                        </a>
                    </div>

                    <div className={styles.socialProof}>
                        <div className={styles.avatarStack}>
                            <div className={styles.avatar}>JK</div>
                            <div className={styles.avatar}>AS</div>
                            <div className={styles.avatar}>MR</div>
                            <div className={styles.avatar}>+</div>
                        </div>
                        <p className={styles.socialProofText}>
                            Trusted by <strong>120+ AI-first teams</strong>
                        </p>
                    </div>
                </div>

                {/* Right Visual */}
                <div className={styles.heroVisual}>
                    <div className={styles.heroImageWrapper}>
                        <Image
                            src="/images/hero-ai-engineer.png"
                            alt="AI Engineer Professional"
                            width={500}
                            height={600}
                            className={styles.heroImage}
                            priority
                        />

                        {/* Floating Cards */}
                        <div className={`${styles.floatingCard} ${styles.topRight}`}>
                            <div className={`${styles.cardIcon} ${styles.blue}`}>⏱️</div>
                            <div className={styles.cardContent}>
                                <h4>Avg Deployment</h4>
                                <p>14 Days</p>
                            </div>
                        </div>

                        <div className={`${styles.floatingCard} ${styles.bottomLeft}`}>
                            <div className={`${styles.cardIcon} ${styles.green}`}>💰</div>
                            <div className={styles.cardContent}>
                                <h4>Cost Savings</h4>
                                <p>40% vs Full-time</p>
                            </div>
                        </div>

                        <div className={`${styles.floatingCard} ${styles.bottomRight}`}>
                            <div className={`${styles.cardIcon} ${styles.purple}`}>✓</div>
                            <div className={styles.cardContent}>
                                <h4>Acceptance Rate</h4>
                                <p>Only 3%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
