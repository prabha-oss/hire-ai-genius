import styles from "./HowItWorks.module.css";

const steps = [
    {
        number: "01",
        icon: "💬",
        title: "30-Minute Discovery Call",
        description:
            "Share your AI roadmap, stack, and constraints with our AI architects—not sales reps. We ask about model choices, data pipelines, and production requirements.",
    },
    {
        number: "02",
        icon: "🎯",
        title: "48-Hour Talent Matching",
        description:
            "Receive 2-3 pre-vetted profiles with GitHub portfolios, production case studies, and technical briefs. All candidates screened for math foundations and systems thinking.",
    },
    {
        number: "03",
        icon: "🚀",
        title: "Engineers Deploying in 2 Weeks",
        description:
            "Onboard directly to your Slack/GitHub. Scale hours from 10 to 40/week based on sprint milestones. Cancel anytime with 2-week notice. No lock-ins.",
    },
];

export default function HowItWorks() {
    return (
        <section className={styles.howItWorks} id="how-it-works">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2>From Brief to Deployed in 14 Days</h2>
                    <p>
                        No lengthy interviews. No recruiter spam. Just expert AI talent
                        matched to your stack and shipped fast.
                    </p>
                </div>

                <div className={styles.stepsGrid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.stepCard}>
                            <div className={styles.stepNumber}>{step.number}</div>
                            <div className={styles.stepIcon}>{step.icon}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaWrapper}>
                    <button className={styles.ctaButton}>
                        Book Your Discovery Call (It's Free) →
                    </button>
                </div>
            </div>
        </section>
    );
}
