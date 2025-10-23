import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-subtle">
        <Header />
        <main>
          <Hero />
          <Summary />
          <Experience />
          <Projects />
          <Education />
          <Skills />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
