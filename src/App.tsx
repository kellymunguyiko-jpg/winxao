import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import HowToInstall from "./components/HowToInstall";
import Requirements from "./components/Requirements";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <Screenshots />
        <HowToInstall />
        <Requirements />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
