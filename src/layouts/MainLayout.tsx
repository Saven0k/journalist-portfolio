import { useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Articles from "../components/Articles/Articles";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [lang, setLang] = useState<"ru" | "en">("ru");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLanguage = () => {
    setLang(lang === "ru" ? "en" : "ru");
  };

  return (
    <>
      <Header 
        activeSection={activeSection} 
        onNavigate={scrollToSection}
        lang={lang}
        onToggleLanguage={toggleLanguage}
      />
      <Hero lang={lang} onNavigate={scrollToSection} />
      <About lang={lang} />
      <Articles lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  );
};

export default MainLayout;