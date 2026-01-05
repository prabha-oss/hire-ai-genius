import styles from "./CaseStudies.module.css";

const caseStudies = [
    {
        tag: "SERIES A STARTUP",
        title: "Saved $180K & Shipped MVP in 8 Weeks",
        challenge:
            "Seed-stage AI startup needed senior LLM expertise to build RAG architecture before Series A demo day. Couldn't justify $250K full-time hire on 18-month runway.",
        solution: {
            title: "Fractional Senior LLM Engineer",
            details: [
                "Engagement: 25+ hrs/week, scaled to 40 during sprint",
                "Focus: RAG architecture, cost optimization, vector DB",
                "Timeline: 2 weeks to deploy, 8 weeks to MVP",
            ],
        },
        results: [
            "Shipped production RAG pipeline in 8 weeks",
            "Secured $3M Series A follow-on funding",
            "$180K savings vs. full-time hire",
            "Zero offers rejected (talent stayed engaged)",
        ],
    },
    {
        tag: "MID-MARKET SAAS",
        title: "Avoided $240K Overhead, Retained Control",
        challenge:
            "$5M ARR SaaS company wanted AI-powered recommendation engine but feared \"AI team creep.\" Agencies quoted $300K+ for black-box solutions.",
        solution: {
            title: "Fractional Applied ML Engineer",
            details: [
                "Engagement: 20 hrs/week, 6-month project",
                "Focus: Recommendation system, in-house training",
                "Timeline: 4 weeks to prototype, 12 weeks to production",
            ],
        },
        results: [
            "15% uplift in user engagement",
            "Internal team upskilled (not dependent on vendor)",
            "$240K saved vs. agency + full-time hire",
            "Scaled to 30hrs/week post-launch (flexible)",
        ],
    },
];

export default function CaseStudies() {
    return (
        <section className={styles.caseStudies} id="case-studies">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2>AI Teams Who Avoided $300K Mistakes</h2>
                </div>

                <div className={styles.cardsGrid}>
                    {caseStudies.map((study, index) => (
                        <div key={index} className={styles.caseCard}>
                            <div className={styles.cardHeader}>
                                <span className={styles.tag}>{study.tag}</span>
                            </div>

                            <h3 className={styles.cardTitle}>{study.title}</h3>

                            <div className={styles.section}>
                                <div className={styles.sectionLabel}>The Challenge:</div>
                                <p className={styles.sectionContent}>{study.challenge}</p>
                            </div>

                            <div className={styles.section}>
                                <div className={styles.sectionLabel}>The Solution:</div>
                                <p className={styles.sectionContent}>{study.solution.title}</p>
                                <ul className={styles.solutionDetails}>
                                    {study.solution.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.section}>
                                <div className={styles.sectionLabel}>Results:</div>
                                <div className={styles.resultsList}>
                                    {study.results.map((result, i) => (
                                        <div key={i} className={styles.resultItem}>
                                            <span className={styles.checkIcon}>✓</span>
                                            <span>{result}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
