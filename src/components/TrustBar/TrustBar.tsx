import styles from "./TrustBar.module.css";

const stats = [
    { number: "#1", label: "Fractional AI Talent Platform" },
    { number: "120K+", label: "Pre-vetted AI Engineers" },
    { number: "14 Days", label: "Avg Deployment Time" },
    { number: "90%", label: "Retention Rate" },
];

export default function TrustBar() {
    return (
        <section className={styles.trustBar}>
            <div className={styles.trustBarContainer}>
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statCard}>
                            <div className={styles.statNumber}>{stat.number}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
