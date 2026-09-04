import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import Me from "../../../public/me.jpg";
import "./Hero.scss";

interface HeroProps {
    onNavigate?: (section: string) => void;
    lang: "ru" | "en";
}

const Hero = ({ onNavigate, lang }: HeroProps) => {
    const texts = profile.staticTexts[lang];

    return (
        <section id="hero" className="hero">
            <div className="hero__video-bg">
                <video
                    src="/video/background.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero__video"
                />
                <div className="hero__video-overlay"></div>
            </div>

            <div className="hero__container">
                <div className="hero__content">
                    <motion.div
                        className="hero__photo-wrapper"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={Me}
                            alt={profile.name[lang]}
                            className="hero__photo"
                        />
                        <div className="hero__photo-ring"></div>
                    </motion.div>

                    <motion.div
                        className="hero__text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="hero__badge">
                            <span className="hero__badge-dot"></span>
                            {texts.heroBadge}
                        </div>
                        <h1 className="hero__title">
                            {profile.name[lang]} <span>{profile.surname[lang]}</span>
                        </h1>
                        <p className="hero__subtitle">
                            📍 {profile.city[lang]}, {profile.country[lang]}
                        </p>
                        <div className="hero__buttons">
                            <button
                                className="hero__btn-primary"
                                onClick={() => onNavigate?.("about")}
                            >
                                {texts.heroBtn1}
                            </button>
                            <button
                                className="hero__btn-secondary"
                                onClick={() => onNavigate?.("articles")}
                            >
                                {texts.heroBtn2}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;