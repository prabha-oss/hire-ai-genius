import styles from "./FinalCTA.module.css";

const nextSteps = [
    "30-min chat with AI architect",
    "2-3 matched profiles in 48hrs",
    "Engineers deploying in 2 weeks",
];

export default function FinalCTA() {
    return (
        <section className={styles.finalCta}>
            <div className={styles.container}>
                <h2 className={styles.headline}>
                    Every Week You Wait, Your Competitor Ships
                </h2>

                <p className={styles.subheadline}>
                    Amid a 67% YoY AI demand surge, you have two choices:
                    <br />
                    Burn months on full-time chaos or access pre-vetted talent in 2 weeks.
                </p>

                <p className={styles.emphasis}>
                    The right AI hire compounds velocity.
                    <br />
                    The wrong one kills 6 months.
                </p>

                <button className={styles.ctaButton}>
                    Book Free 30-Minute Consultation →
                </button>

                <div className={styles.whatNext}>What Happens Next:</div>

                <div className={styles.steps}>
                    {nextSteps.map((step, index) => (
                        <>
                            <div key={index} className={styles.step}>
                                <span className={styles.stepNumber}>{index + 1}</span>
                                <span>{step}</span>
                            </div>
                            {index < nextSteps.length - 1 && (
                                <span className={styles.arrow}>→</span>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
}
