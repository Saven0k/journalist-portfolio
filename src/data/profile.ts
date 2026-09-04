// src/data/profile.ts
export const profile = {
    name: {
        ru: "Мария",
        en: "Maria"
    },
    surname: {
        ru: "Одностеблец",
        en: "Odnosteblets"
    },
    age: 19,
    city: {
        ru: "Санкт-Петербург",
        en: "Saint Petersburg"
    },
    country: {
        ru: "Россия",
        en: "Russia"
    },
    position: {
        ru: "Журналист",
        en: "Journalist"
    },
    email: "anna@journalist.com",
    phone: "+7 (999) 123-45-67",

    about: {
        ru: {
            intro: "Я журналист с 5-летним опытом работы в крупных медиа. Специализируюсь на социальной журналистике и расследованиях.",
            points: [
                "Автор более 200 публикаций в ведущих СМИ",
                "Финалист премии «Золотое перо» 2024",
                "Эксперт по социальной тематике",
                "Владею методами интервью и расследований"
            ]
        },
        en: {
            intro: "Journalist with 5 years of experience in major media. Specialize in social journalism and investigations.",
            points: [
                "Author of 200+ publications in leading media",
                "Finalist of 'Golden Pen' award 2024",
                "Expert in social topics",
                "Skilled in interviews and investigations"
            ]
        }
    },

    articles: [
        {
            title: {
                ru: "Как городские сообщества меняют жизнь",
                en: "How Urban Communities Change Lives"
            },
            description: {
                ru: "Исследование о влиянии локальных сообществ на качество жизни в мегаполисе",
                en: "A study on the impact of local communities on quality of life in the metropolis"
            },
            link: "#",
            date: "2025",
            category: {
                ru: "Социология",
                en: "Sociology"
            }
        },
        {
            title: {
                ru: "Новые медиа: будущее журналистики",
                en: "New Media: The Future of Journalism"
            },
            description: {
                ru: "Анализ трансформации журналистики в цифровую эпоху",
                en: "Analysis of journalism transformation in the digital age"
            },
            link: "#",
            date: "2025",
            category: {
                ru: "Медиа",
                en: "Media"
            }
        }
    ],

    // Статические тексты для всех компонентов
    staticTexts: {
        ru: {
            heroBadge: "Журналист",
            heroTitle: "Мария Одностеблец",
            heroSubtitle: "📍 Санкт-Петербург, Россия",
            heroBtn1: "Узнать больше",
            heroBtn2: "Мои статьи",
            aboutTitle: "Обо мне",
            aboutBadge: "Журналист",
            aboutSocialTitle: "Связь со мной",
            articlesTitle: "Мои статьи",
            articlesLink: "Читать статью →",
            contactTitle: "Свяжитесь со мной",
            contactSubtitle: "Давайте поговорим",
            contactDesc: "Я всегда открыта для новых идей, интервью и сотрудничества. Напишите мне, и я отвечу в ближайшее время.",
            contactEmail: "Email",
            contactPhone: "Телефон",
            contactSocials: "Соцсети",
            contactFormName: "Ваше имя",
            contactFormNamePlaceholder: "Введите ваше имя",
            contactFormEmail: "Ваш Email",
            contactFormEmailPlaceholder: "Введите ваш email",
            contactFormMessage: "Сообщение",
            contactFormMessagePlaceholder: "Напишите ваше сообщение...",
            contactFormBtn: "📤 Отправить сообщение",
            contactFormSuccess: "✅ Отправлено!",
            contactFormSending: "Отправка...",
            footerTagline: "Журналист · Создаю истории, которые меняют мир"
        },
        en: {
            heroBadge: "Journalist",
            heroTitle: "Maria Odnosteblets",
            heroSubtitle: "📍 Saint Petersburg, Russia",
            heroBtn1: "Learn more",
            heroBtn2: "My articles",
            aboutTitle: "About me",
            aboutBadge: "Journalist",
            aboutSocialTitle: "Connect with me",
            articlesTitle: "My articles",
            articlesLink: "Read article →",
            contactTitle: "Contact me",
            contactSubtitle: "Let's talk",
            contactDesc: "I'm always open to new ideas, interviews and collaborations. Write to me and I'll get back to you soon.",
            contactEmail: "Email",
            contactPhone: "Phone",
            contactSocials: "Social networks",
            contactFormName: "Your name",
            contactFormNamePlaceholder: "Enter your name",
            contactFormEmail: "Your Email",
            contactFormEmailPlaceholder: "Enter your email",
            contactFormMessage: "Message",
            contactFormMessagePlaceholder: "Write your message...",
            contactFormBtn: "📤 Send message",
            contactFormSuccess: "✅ Sent!",
            contactFormSending: "Sending...",
            footerTagline: "Journalist · Creating stories that change the world"
        }
    },

    socials: [
        { name: "Telegram", link: "https://t.me/annapetrova", icon: "✈️" },
        { name: "VK", link: "https://vk.com/id667087288", icon: "📘" },
    ]
};