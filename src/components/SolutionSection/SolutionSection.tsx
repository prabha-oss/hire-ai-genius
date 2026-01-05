import styles from "./SolutionSection.module.css";

const features = [
    {
        title: "Pre-vetted by AI Practitioners",
        description:
            "Deep technical screening by ML engineers with production experience. Only 3% acceptance rate. Math/stats foundations, systems thinking, research literacy verified.",
    },
    {
        title: "Fractional ≠ Freelance",
        description:
            "Not gig workers. Embedded outcome owners with 90% retention. 2-week average deployment. Scale hours up/down by milestone.",
    },
    {
        title: "14 Days to Deploy, 40% Cost Savings",
        description:
            "No hiring overhead. No agency fees. Transparent pricing. Access 99th percentile talent at modular velocity.",
    },
];

const funnelSteps = [
    { number: "10K+", title: "Applications", desc: "Received annually" },
    { number: "1.2K", title: "Technical Screen", desc: "Passed initial review", rejected: true },
    { number: "450", title: "Systems Interview", desc: "Architecture deep-dive", rejected: true },
    { number: "3%", title: "Accepted", desc: "Production-ready talent", accepted: true },
];

export default function SolutionSection() {
    return (
        <section className={styles.solutionSection} id="solution">
            <div className={styles.container}>
                {/* Left - Visual */}
                <div className={styles.visualSide}>
                    <div className={styles.funnelCard}>
                        <div className={styles.funnelTitle}>Our Vetting Funnel</div>
                        {funnelSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`${styles.funnelStep} ${step.rejected ? styles.rejected : ""
                                    } ${step.accepted ? styles.accepted : ""}`}
                            >
                                <div className={styles.stepNumber}>{step.number}</div>
                                <div className={styles.stepContent}>
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.floatingStats}>
                        <div className={styles.statsRow}>
                            <div className={styles.stat}>
                                <strong>14</strong>
                                <span>Days to Deploy</span>
                            </div>
                            <div className={styles.stat}>
                                <strong>40%</strong>
                                <span>Cost Savings</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right - Content */}
                <div className={styles.contentSide}>
                    <span className={styles.eyebrow}>THE HIRE AI GENIUS DIFFERENCE</span>
                    <h2 className={styles.headline}>Fractional AI Talent That Actually Works</h2>
                    <p className={styles.subheadline}>
                        We're not a staffing agency—we're talent access infrastructure.
                        Pre-vetted by practitioners, deployed in weeks, scaled by outcomes.
                    </p>

                    <div className={styles.featuresList}>
                        {features.map((feature, index) => (
                            <div key={index} className={styles.featureItem}>
                                <div className={styles.featureIcon}>✓</div>
                                <div className={styles.featureContent}>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className={styles.ctaButton}>
                        See How We Vet Talent →
                    </button>
                </div>
            </div>
        </section>
    );
}
