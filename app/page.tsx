import { Footer } from "@/components/layout/Footer";
import { AboutMe } from "@/components/sections/AboutMe";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { HeroSection } from "@/components/sections/HeroSection";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
    return (
        <main className="bg-background min-h-screen relative">
            <HeroSection />
            <AboutMe />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </main>
    );
}
