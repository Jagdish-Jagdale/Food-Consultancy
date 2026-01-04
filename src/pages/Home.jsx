import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import NMFI from '../components/sections/NMFI';
import Stats from '../components/sections/Stats';
import Services from '../components/sections/Services';
import TargetAudience from '../components/sections/TargetAudience';
import PartnerLogos from '../components/sections/PartnerLogos';
import Testimonials from '../components/sections/Testimonials';
import CaseStudies from '../components/sections/CaseStudies';
import CTASection from '../components/sections/CTASection';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <NMFI />
                <Stats />
                <Services />
                <TargetAudience />
                <PartnerLogos />
                <Testimonials />
                <CaseStudies />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
