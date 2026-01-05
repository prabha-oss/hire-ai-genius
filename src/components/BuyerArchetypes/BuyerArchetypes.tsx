import styles from "./BuyerArchetypes.module.css";

const archetypes = [
    {
        label: "ARCHETYPE 01",
        icon: "🚀",
        title: "Seed Founders",
        quote:
            '"If this hire is wrong, I lose the market window. I need 99th percentile output without the 100th percentile commitment."',
        highlight:
            "Client secured $3M follow-on by shipping RAG pipeline in 8 weeks",
    },
    {
        label: "ARCHETYPE 02",
        icon: "🔧",
        title: "SaaS Founders",
        quote:
            '"We have revenue, but I don\'t want to become an AI company—I just need AI to not fall behind."',
        highlight:
            "Mid-market SaaS avoided $240K & kept control with 20hr/week engineer",
    },
    {
        label: "ARCHETYPE 03",
        icon: "🧠",
        title: "Technical CTOs",
        quote:
            '"I don\'t want to mentor juniors. I need someone who reduces my load and understands tradeoffs."',
        highlight:
            "Deployed real-time retraining pipeline in 12 weeks, zero overhead",
    },
];

const enterpriseArchetype = {
    label: "ARCHETYPE 04",
    icon: "🏢",
    title: "Enterprise Innovation Teams: Bypass HR Hell",
    quote:
        '"We have budget but can\'t hire fast. Procurement takes 6 months. Fractional bypasses the freeze."',
    tags: ["GenAI Pilots", "Innovation Labs", "Consultative Engagements"],
};

export default function BuyerArchetypes() {
    return (
        <section className={styles.buyerArchetypes} id="buyer-archetypes">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2>Built for "Bottlenecked Builders"</h2>
                    <p>
                        You're not looking for resumes. You're looking to compress risk.
                        Here's who we're built for:
                    </p>
                </div>

                <div className={styles.topGrid}>
                    {archetypes.map((archetype, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.archetypeLabel}>{archetype.label}</span>
                                <span className={styles.cardIcon}>{archetype.icon}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{archetype.title}</h3>
                            <p className={styles.cardQuote}>{archetype.quote}</p>
                            <div className={styles.cardHighlight}>
                                <span className={styles.checkIcon}>✓</span>
                                <span className={styles.highlightText}>
                                    {archetype.highlight}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Full-width Enterprise Card */}
                <div className={styles.fullWidthCard}>
                    <div className={styles.fullWidthIcon}>{enterpriseArchetype.icon}</div>
                    <div className={styles.fullWidthContent}>
                        <h3>{enterpriseArchetype.title}</h3>
                        <p>{enterpriseArchetype.quote}</p>
                        <div className={styles.tags}>
                            {enterpriseArchetype.tags.map((tag, i) => (
                                <span key={i} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <span className={styles.fullWidthLabel}>
                        {enterpriseArchetype.label}
                    </span>
                </div>
            </div>
        </section>
    );
}
