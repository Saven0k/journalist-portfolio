import { profile } from "../../data/profile";
import "./Footer.scss";

interface FooterProps {
    lang: "ru" | "en";
}

const Footer = ({ lang }: FooterProps) => {
    const texts = profile.staticTexts[lang];

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__copyright">
                    <p>© 2025 {profile.name[lang]} {profile.surname[lang]}</p>
                    <p className="footer__tagline">
                        {texts.footerTagline}
                    </p>
                </div>
                <div className="footer__socials">
                    {profile.socials.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__social-link"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;