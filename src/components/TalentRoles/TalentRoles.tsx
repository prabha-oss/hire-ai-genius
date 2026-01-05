import styles from "./TalentRoles.module.css";

const roles = [
    {
        icon: "🤖",
        title: "Fractional LLM Engineers",
        description:
            "Experts in RAG architecture, vector databases, and prompt optimization. Not just model wrappers—engineers who understand cost vs. performance tradeoffs.",
        projects: ["Semantic Search", "Agentic Workflows", "Fine-Tuning", "Cost Arbitrage"],
    },
    {
        icon: "📊",
        title: "Applied ML Engineers",
        description:
            "Bridge Jupyter notebooks to production. Experience with recommendation systems, fraud detection, and real-time inference at scale.",
        projects: ["Recommendation Engines", "Predictive Analytics", "A/B Testing", "Feature Engineering"],
    },
    {
        icon: "⚙️",
        title: "MLOps Specialists",
        description:
            "Build infrastructure for models to live, not just train. CI/CD for ML, monitoring, retraining pipelines, and deployment automation.",
        projects: ["Deployment Pipelines", "Real-Time Retraining", "Monitoring", "K8s for ML"],
    },
    {
        icon: "🔬",
        title: "AI Research Engineers",
        description:
            "Turn novel papers into competitive advantages. Experience with custom architectures, zero-shot learning, and pushing SOTA into production.",
        projects: ["Custom Architectures", "Paper Implementation", "Multimodal AI", "Novel Prototyping"],
    },
    {
        icon: "🎨",
        title: "AI Product Engineers",
        description:
            'Understand the UX behind "how AI should feel." Design prompt interfaces, feedback loops, and user-facing AI interactions that don\'t suck.',
        projects: ["AI UX Design", "Prompt Interfaces", "Human-in-Loop", "Feature Scoping"],
    },
    {
        icon: "🗄️",
        title: "Data Infrastructure Leads",
        description:
            "Build the data foundations AI needs. ETL pipelines, semantic layers, data quality frameworks, and real-time streaming for model inputs.",
        projects: ["ETL Pipelines", "Data Warehousing", "Streaming Data", "Semantic Layers"],
    },
];

const vettingPoints = [
    "Math/Stats Foundations",
    "Systems Thinking",
    "Research Literacy",
    "Production ML Experience",
];

export default function TalentRoles() {
    return (
        <section className={styles.talentRoles} id="talent-roles">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2>The AI Specialists We Place</h2>
                    <p>
                        Senior practitioners with production battle scars—not bootcamp
                        graduates cosplaying as ML engineers.
                    </p>
                </div>

                <div className={styles.rolesGrid}>
                    {roles.map((role, index) => (
                        <div key={index} className={styles.roleCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.roleIcon}>{role.icon}</div>
                                <h3 className={styles.roleTitle}>{role.title}</h3>
                            </div>
                            <p className={styles.roleDescription}>{role.description}</p>
                            <div className={styles.projectsList}>
                                {role.projects.map((project, i) => (
                                    <span key={i} className={styles.projectTag}>
                                        {project}
                                    </span>
                                ))}
                            </div>
                            <a href="#" className={styles.viewLink}>
                                View Talent Pool →
                            </a>
                        </div>
                    ))}
                </div>

                {/* Dark Vetting Banner */}
                <div className={styles.vettingBanner}>
                    <h3>Why Our Vetting Works (The 3% Standard)</h3>
                    <div className={styles.vettingPoints}>
                        {vettingPoints.map((point, i) => (
                            <div key={i} className={styles.vettingPoint}>
                                <span className={styles.check}>✓</span>
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                    <button className={styles.bannerCta}>See Vetting Process →</button>
                </div>
            </div>
        </section>
    );
}
