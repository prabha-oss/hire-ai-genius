import HeroSection from "@/components/HeroSection/HeroSection";
import TrustBar from "@/components/TrustBar/TrustBar";
import ProblemSection from "@/components/ProblemSection/ProblemSection";
import SolutionSection from "@/components/SolutionSection/SolutionSection";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import BuyerArchetypes from "@/components/BuyerArchetypes/BuyerArchetypes";
import TalentRoles from "@/components/TalentRoles/TalentRoles";
import ComparisonTable from "@/components/ComparisonTable/ComparisonTable";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import FAQ from "@/components/FAQ/FAQ";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <main>
                <HeroSection />
                <TrustBar />
                <ProblemSection />
                <SolutionSection />
                <HowItWorks />
                <BuyerArchetypes />
                <TalentRoles />
                <ComparisonTable />
                <CaseStudies />
                <FAQ />
                <FinalCTA />
            </main>
            <Footer />
        </>
    );
}
