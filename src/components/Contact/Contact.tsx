import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { profile } from "../../data/profile";
import "./Contact.scss";

interface ContactProps {
    lang: "ru" | "en";
}

const Contact = ({ lang }: ContactProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const texts = profile.staticTexts[lang];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => {
            setStatus("success");
            setTimeout(() => setStatus("idle"), 3000);
        }, 1000);
    };

    return (
        <section id="contact" className="contact" ref={ref}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {texts.contactTitle}
            </motion.h2>

            <div className="contact__container">
                <motion.div
                    className="contact__info"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h3>{texts.contactSubtitle}</h3>
                    <p>{texts.contactDesc}</p>

                    <div className="contact__details">
                        <div className="contact__item">
                            <span className="contact__icon">📧</span>
                            <div>
                                <span className="contact__label">{texts.contactEmail}</span>
                                <span className="contact__value">{profile.email}</span>
                            </div>
                        </div>
                        <div className="contact__item">
                            <span className="contact__icon">📱</span>
                            <div>
                                <span className="contact__label">{texts.contactPhone}</span>
                                <span className="contact__value">{profile.phone}</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact__socials">
                        <h4>{texts.contactSocials}</h4>
                        <div className="contact__socials-list">
                            {profile.socials.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact__social-link"
                                >
                                    <span className="social-icon">{item.icon}</span>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    className="contact__form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <div className="form-group">
                        <label className="form-label">{texts.contactFormName}</label>
                        <input type="text" placeholder={texts.contactFormNamePlaceholder} required />
                    </div>

                    <div className="form-group">
                        <label className="form-label">{texts.contactFormEmail}</label>
                        <input type="email" placeholder={texts.contactFormEmailPlaceholder} required />
                    </div>

                    <div className="form-group">
                        <label className="form-label">{texts.contactFormMessage}</label>
                        <textarea rows={5} placeholder={texts.contactFormMessagePlaceholder} required />
                    </div>

                    <button 
                        type="submit" 
                        className="contact__submit"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? (
                            <span className="loader"></span>
                        ) : status === "success" ? (
                            texts.contactFormSuccess
                        ) : (
                            texts.contactFormBtn
                        )}
                    </button>

                    {status === "success" && (
                        <p className="form-success">{texts.contactFormSuccess}</p>
                    )}

                    {status === "error" && (
                        <p className="form-error">❌ {lang === "ru" ? "Ошибка при отправке. Попробуйте позже." : "Error sending. Try again later."}</p>
                    )}
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;