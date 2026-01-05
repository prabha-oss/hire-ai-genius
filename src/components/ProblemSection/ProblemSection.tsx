import styles from "./ProblemSection.module.css";

const problems = [
    {
        icon: "⏰",
        iconClass: "warning",
        title: "Adverse Selection Trap",
        promise: '"We need a senior AI engineer fast."',
        reality:
            "118 days to hire. 4 months zero velocity. 68% rejection rate. Graduates leave for Big Tech.",
        cost: "$20K overhead before first line of code. One wrong hire kills 6 months for Seed-Series B.",
    },
    {
        icon: "🎯",
        iconClass: "danger",
        title: "Gig Marketplace Chaos",
        promise: '"Thousands of AI engineers on Upwork."',
        reality:
            "Self-reported skills. Zero accountability. Codebase sprawl from task-hopping freelancers.",
        cost: "Management overhead, inconsistent quality, tribal knowledge locked in contractor's head.",
    },
    {
        icon: "💸",
        iconClass: "money",
        title: "Staffing Agency Markup",
        promise: '"We\'ll find you top AI talent."',
        reality:
            "30% fees. Recruiters who don't know RAG from API. Optimized for placement, not fit.",
        cost: "Premium for middlemen who can't evaluate production ML experience.",
    },
];

export default function ProblemSection() {
    return (
        <section className={styles.problemSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2>Why B2B AI Hiring is Broken in 2025</h2>
                    <p>
                        $400K bootcamps flood the pool, but for Bottlenecked Builders,
                        choices are runway-killers or black-box agencies.
                    </p>
                </div>

                <div className={styles.cardsGrid}>
                    {problems.map((problem, index) => (
                        <div key={index} className={styles.card}>
                            <div className={`${styles.cardIcon} ${styles[problem.iconClass]}`}>
                                {problem.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{problem.title}</h3>

                            <div className={styles.cardLabel}>Promise:</div>
                            <p className={styles.cardContent}>{problem.promise}</p>

                            <div className={styles.cardLabel}>Reality:</div>
                            <p className={styles.cardContent}>{problem.reality}</p>

                            <div className={styles.cardLabel}>True Cost:</div>
                            <p className={styles.cardContent}>{problem.cost}</p>
                        </div>
                    ))}
                </div>

                <p className={styles.closingStatement}>
                    The market is screaming for a better model. We built it.
                </p>
            </div>
        </section>
    );
}
