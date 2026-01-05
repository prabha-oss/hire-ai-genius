import styles from "./ComparisonTable.module.css";

const comparisonData = [
    {
        feature: "Time to Deploy",
        fullTime: "118 days avg",
        agency: "60-90 days",
        hireAi: "14 days",
        highlight: true,
    },
    {
        feature: "Total Cost (Annual)",
        fullTime: "$200K-$400K",
        agency: "$150K + 30% fee",
        hireAi: "$80K-$160K",
        highlight: true,
    },
    {
        feature: "Vetting Quality",
        fullTime: "Hit-or-miss",
        agency: "Recruiter-screened",
        hireAi: "3% acceptance, practitioner-vetted",
        highlight: true,
    },
    {
        feature: "Flexibility",
        fullTime: "Zero (permanent)",
        agency: "Low (contract lock)",
        hireAi: "High (weekly scale)",
        highlight: true,
    },
    {
        feature: "Offer Rejection Rate",
        fullTime: "68%",
        agency: "50%",
        hireAi: "3%",
        highlight: true,
    },
    {
        feature: "Lock-In Period",
        fullTime: "Indefinite",
        agency: "3-12 months",
        hireAi: "None (2-week notice)",
        highlight: true,
    },
    {
        feature: "Management Overhead",
        fullTime: "High (onboarding, HR)",
        agency: "Medium (vendor mgmt)",
        hireAi: "Low (embedded)",
        highlight: true,
    },
    {
        feature: "Outcome Ownership",
        fullTime: "Employee mindset",
        agency: "Volume-driven",
        hireAi: "Senior, outcome-focused",
        highlight: true,
    },
    {
        feature: "Exit Risk",
        fullTime: "Severance, knowledge loss",
        agency: "Contract penalties",
        hireAi: "Smooth handoff",
        highlight: true,
    },
];

export default function ComparisonTable() {
    return (
        <section className={styles.comparisonTable} id="comparison">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2>How We Stack Up Against the Broken Alternatives</h2>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Full-Time Hire</th>
                                <th>Staffing Agency</th>
                                <th className={styles.highlight}>Hire AI Genius</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.feature}</td>
                                    <td className={styles.neutral}>{row.fullTime}</td>
                                    <td className={styles.neutral}>{row.agency}</td>
                                    <td className={styles.highlight}>
                                        <span className={styles.checkIcon}>✓</span>
                                        {row.hireAi}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={styles.ctaWrapper}>
                    <button className={styles.ctaButton}>
                        Download Full Cost Breakdown (PDF) →
                    </button>
                </div>
            </div>
        </section>
    );
}
