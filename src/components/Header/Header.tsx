import { useState, useEffect } from "react";
import "./Header.scss";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  lang: "ru" | "en";
  onToggleLanguage: () => void;
}

const Header = ({ activeSection, onNavigate, lang, onToggleLanguage }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: lang === "ru" ? "Главная" : "Home" },
    { id: "about", label: lang === "ru" ? "Обо мне" : "About" },
    { id: "articles", label: lang === "ru" ? "Статьи" : "Articles" },
    { id: "contact", label: lang === "ru" ? "Контакты" : "Contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <div 
          className="header__logo" 
          onClick={() => handleNavClick("hero")}
        >
          <span className="logo-text">МО</span>
          <span className="logo-dot">.</span>
        </div>

        <button
          className={`header__burger ${mobileMenuOpen ? "header__burger--active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${mobileMenuOpen ? "header__nav--open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          className="header__lang-toggle"
          onClick={onToggleLanguage}
          title={lang === "ru" ? "Switch to English" : "Переключить на русский"}
        >
          {lang === "ru" ? "EN" : "RU"}
        </button>
      </div>
    </header>
  );
};

export default Header;