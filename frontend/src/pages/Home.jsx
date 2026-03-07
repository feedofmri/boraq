import Hero from '../components/Hero';
import ClientsTicker from '../components/sections/ClientsTicker';
import FoundersNote from '../components/sections/FoundersNote';
import ServicesPreview from '../components/sections/ServicesPreview';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import CaseStudyHighlight from '../components/sections/CaseStudyHighlight';
import StatsCounter from '../components/sections/StatsCounter';
import Testimonials from '../components/sections/Testimonials';
import ExpertTeam from '../components/sections/ExpertTeam';
import InteractiveFAQ from '../components/sections/InteractiveFAQ';
import CallToAction from '../components/sections/CallToAction';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <ClientsTicker />
            <FoundersNote />
            <ServicesPreview />
            <ProcessTimeline />
            <CaseStudyHighlight />
            <StatsCounter />
            <Testimonials />
            <ExpertTeam />
            <InteractiveFAQ />
            <CallToAction />
        </div>
    );
}
