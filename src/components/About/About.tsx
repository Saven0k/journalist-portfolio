import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "../../data/profile";
import "./About.scss";

interface AboutProps {
    lang: "ru" | "en";
}

const About = ({ lang }: AboutProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const data = profile.about[lang];
    const texts = profile.staticTexts[lang];

    return (
        <section id="about" className="about" ref={ref}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {texts.aboutTitle}
            </motion.h2>

            <div className="about__grid">
                <motion.div
                    className="about__text"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <div className="about__badge">
                        <span className="badge-text">{texts.aboutBadge}</span>
                    </div>
                    <p className="about__intro">{data.intro}</p>
                    <ul className="about__list">
                        {data.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    className="about__info"
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <div className="about__stats">
                        <div className="stat">
                            <span className="stat-number">{profile.country[lang]}</span>
                            <span className="stat-label">{lang === "ru" ? "страна" : "country"}</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">{profile.city[lang]}</span>
                            <span className="stat-label">{lang === "ru" ? "город" : "city"}</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">{profile.age}</span>
                            <span className="stat-label">{lang === "ru" ? "лет" : "years"}</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">{lang === "ru" ? "лет опыта" : "years exp"}</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">100+</span>
                            <span className="stat-label">{lang === "ru" ? "публикаций" : "publications"}</span>
                        </div>
                    </div>

                    <div className="about__social">
                        <h3>{texts.aboutSocialTitle}</h3>
                        <div className="social__links">
                            {profile.socials.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social__link"
                                >
                                    <span className="social__icon">{item.icon}</span>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;