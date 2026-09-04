import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "../../data/profile";
import "./Articles.scss";

interface ArticlesProps {
    lang: "ru" | "en";
}

const Articles = ({ lang }: ArticlesProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const texts = profile.staticTexts[lang];

    return (
        <section id="articles" className="articles" ref={ref}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {texts.articlesTitle}
            </motion.h2>

            <div className="articles__grid">
                {profile.articles.map((article, idx) => (
                    <motion.a
                        key={idx}
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="articles__card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: idx * 0.2, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="articles__card-header">
                            <span className="articles__category">{article.category[lang]}</span>
                            <span className="articles__date">{article.date}</span>
                        </div>
                        <h3 className="articles__title">{article.title[lang]}</h3>
                        <p className="articles__description">{article.description[lang]}</p>
                        <span className="articles__link">
                            {texts.articlesLink}
                        </span>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Articles;