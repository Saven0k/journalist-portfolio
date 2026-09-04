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
    email: "mariaodnosteblets@yandex.ru",
    phone: "+7 (999) 123-45-67",

    about: {
        ru: {
            intro: "Я журналист с 3-летним опытом работы в крупных медиа. Специализируюсь на социальной журналистике и расследованиях.",
            points: [
                "Автор более 100 публикаций в ведущих СМИ",
                "Эксперт по социальной тематике",
                "Владею методами интервью и расследований"
            ]
        },
        en: {
            intro: "Journalist with 3 years of experience in major media. Specialize in social journalism and investigations.",
            points: [
                "Author of 100+ publications in leading media",
                "Expert in social topics",
                "Skilled in interviews and investigations"
            ]
        }
    },

    articles: [
        {
            title: {
                ru: "Тише едешь – дальше будешь: стоит ли торопиться получать водительские права",
                en: "How Urban Communities Change Lives"
            },
            description: {
                ru: "Сейчас закон позволяет начать обучение в автошколе в 16–17 лет, сдать экзамен в ГИБДД заранее, чтобы сразу по достижении 18 лет получить заветное удостоверение. Но надо ли спешить в таком серьезном деле?",
                en: "A study on the impact of local communities on quality of life in the metropolis"
            },
            link: "https://kubnews.ru/obshchestvo/2025/03/25/tishe-edesh-dalshe-budesh-stoit-li-toropitsya-poluchat-voditelskie-prava/#1",
            date: "2025",
            category: {
                ru: "Общество",
                en: "Sociology"
            }
        },
        {
            title: {
                ru: "Жизнь после ЕГЭ: что думают выпускники школ о своих будущих профессиях",
                en: "New Media: The Future of Journalism"
            },
            description: {
                ru: "В идеале, за три месяца до ЕГЭ выпускник уже не только выбрал будущую профессию, но и вовсю готовится к экзаменам по необходимым для поступления в нужный вуз предметам. На деле же до сих пор определились со своим будущим не все. И даже из тех, кто определился, не каждый стопроцентно уверен в своем выборе. Ничего страшного или «все пропало»? Давайте разбираться.",
                en: "Analysis of journalism transformation in the digital age"
            },
            link: "https://kubnews.ru/obshchestvo/2025/02/24/zhizn-posle-ege-chto-dumayut-vypuskniki-shkol-o-svoikh-budushchikh-professiyakh/#1",
            date: "2025",
            category: {
                ru: "Общество",
                en: "Media"
            }
        },
        {
            title: {
                ru: "По главной улице и не только: где туристу прогуляться в Краснодаре",
                en: "New Media: The Future of Journalism"
            },
            description: {
                ru: "Оказавшись в столице Кубани как гость, вы наверняка захотите познакомиться с его достопримечательностями. Но куда пойти в первую очередь? Давайте разбираться.",
                en: "Analysis of journalism transformation in the digital age"
            },
            link: "https://kubnews.ru/obshchestvo/2025/04/18/po-glavnoy-ulitse-i-ne-tolko-gde-turistu-progulyatsya-v-krasnodare/#1",
            date: "2025",
            category: {
                ru: "Общество",
                en: "Media"
            }
        }
    ],

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