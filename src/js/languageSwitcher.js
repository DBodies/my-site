import i18next from "i18next";

export function langSwitcher() {
    function updateText() {
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            el.textContent = i18next.t(key);
        });

        document.getElementById("languageSwitcher").textContent = i18next.language.toUpperCase();
    }


    i18next.init({
        lng: "en",
        resources: {
            en: {
                translation: {
                    about: "About me",
                    education: "Education",
                    skills: "Skills",
                    projects: "Projects",
                    contact: "Contact",
                    resume: "Resume",
                    myName: "Hi, i'm Denis",
                    writeMe: "Write me",
                    readMore: "Read more",
                    myDscr: "I am a full-stack developer with experience in the banking industry. My background helped me develop essential soft skills, which I now apply in the IT field. I have been self-learning IT through courses and personal curiosity. During my learning journey, I successfully completed more than 8 pet projects, focusing on [specific technologies or areas]. Additionally, I led a team project related to the completion of an HTML+CSS course",
                    privatBank: "PrivatBank",
                    workExp: "Word experience",
                    workTime: "2022 - 2024",
                    firstExp: "Experienced in working with international clients",
                    secondExp: " Analyzed customer needs and provided personalized service",
                    thirdExp: "Quickly adapted to changes in workflows and banking products.",
                    fourthExp: "Met regulatory performance targets within set deadlines",
                    fifthExp: " Complied with financial monitoring, risk management, anti-money laundering, counter terrorism financing, and prevention of weapons of mass destruction proliferation regulations",
                    education: "Education",
                    college: "College",
                    nameOfCollege: "Kharkiv College of the State University of Information and Communication Technologies",
                    specialty: "Specialty:",
                    firstMajor: "Major 1: Telecommunications and Radio Engineering",
                    secondMajor: "Major 2: Security and Fire Alarm Electrician",
                    university: "University",
                    nameOfUniversity: "Ukrainian State University of Railway Transport",
                    bachelor: "Bachelor’s Degree: Marketing",
                    master: "Master’s Degree: Personnel Management and Administration",
                    courses: "Courses",
                    goIT: "GoIT School",
                    fullStack: "Full-Stack Developer Course",
                    dataNowadays: "2021-present",
                    dataNowadaysCourse: " 2021 - 2024",
                    project: "Projects",
                    titleFirstProject: "1. Something about me",
                    dscrFirstProject: "This project was made using animations and libraries for Frontend development. It is fully functional, which makes it working and available for work.",
                    secondDscrFirstProject: "A project about a beginner UI/UX designer. Describes his knowledge and projects. Supports the possibility of cooperation by filling out a form or going to the specified contacts. You can also provide a PDF file of the resume",
                    greenHarvest: "2. Green Harvest",
                    secondProjectDscr: "Performed the role of Team Lead. Main tasks included managing work processes, fine-tuning the development environment with Vite, reviewing and adjusting Pull Requests, updating technical dependencies, and making final adjustments to the site, including layout improvements. ",
                    secondDscrSecondProject: "A platform about healthy eating, balanced diets and fresh vegetables straight from the garden. Only natural products for your health.",
                    mustage: "3. Mustage",
                    firstDscrThirdProject: "An adaptive landing page with clickable buttons. Animations and a standard set of frontend tools were used to create it. Supports dark and light modes.",
                    contactMe: "Contact me",
                    requirements: "If my skills match your requirements, I am ready to discuss further steps. You can contact me by email or telegram.",
                    name: "Enter your name",
                    email: "Enter your name",
                    title: "Enter title",
                    message: "Enter your message",
                    submit: "Submit",
                    onlyMyName: "Denis",
                    waysToContact: "Other ways to get in touch with me",
                    navigation: "Site Navigation",
                    general: "Home",
                    beGladToCooperate: "I will be glad to our cooperation",
                }
            },
            ua: {
                translation: {
                    about: "Про мене",
                    education: "Освіта",
                    skills: "Навички",
                    projects: "Проєкти",
                    contact: "Контакти",
                    resume: "Резюме",
                    myName: "Привіт, я Денис",
                    writeMe: "Написати менi",
                    readMore: "Детальнiше",
                    myDscr: "Я full-stack розробник із досвідом роботи в банківській сфері. Мій попередній досвід допоміг мені розвинути важливі soft skills, які я зараз застосовую в IT. Я вивчав IT самостійно, за допомгою курсiв та завдяки власнiй цікавостi. Під час навчання я успішно завершив понад 8 pet-проєктів, зосереджених на [конкретних технологіях або напрямках]. Крім того, я керував командним проєктом, пов'язаним із завершенням курсу HTML+CSS",
                    privatBank: "ПриватБанк",
                    workExp: "Досвід роботи",
                    workTime: "2022 - 2024",
                    firstExp: "Досвід роботи з міжнародними клієнтами",
                    secondExp: "Аналізував потреби клієнтів і надавав персоналізоване обслуговування",
                    thirdExp: "Швидко адаптувався до змін у робочих процесах та банківських продуктах",
                    fourthExp: "Досягав нормативних показників ефективності у встановлені терміни",
                    fifthExp: "Виконував вимоги фінансового моніторингу, управління ризиками, протидії відмиванню грошей, фінансуванню тероризму та розповсюдженню зброї масового ураження",
                    education: "Освіта",
                    college: "Коледж",
                    nameOfCollege: "Харківський коледж Державного університету інформаційно-комунікаційних технологій",
                    specialty: "Спеціальність:",
                    firstMajor: "Перша спеціальність: Телекомунікації та радіотехніка",
                    secondMajor: "Друга спеціальність: Електромонтер охоронно-пожежної сигналізації",
                    university: "Університет",
                    nameOfUniversity: "Український державний університет залізничного транспорту",
                    bachelor: "Ступінь бакалавра: Маркетинг",
                    master: "Ступінь магістра: Управління персоналом та адміністрування",
                    courses: "Курси",
                    goIT: "Школа GoIT",
                    fullStack: "Курс Full-Stack Developer",
                    dataNowadays: "2021 - ",
                    dataNowadaysCourse: "2021 - 2024",

                    project: "Проекты",
                    titleFirstProject: "1. Сайт-резюме",
                    dscrFirstProject: "Цей проект був створений з використанням анімацій та бібліотек для фронтенд-розробки. Він повністю функціональний, що робить його працюючим і доступним для роботи.",
                    secondDscrFirstProject: "Проект про початківця UI/UX дизайнера. Описує його знання та проекти. Підтримує можливість співпраці через заповнення форми або перехід до зазначених контактів. Також можна надати PDF-файл резюме.",
                    greenHarvest: "Green Harvest.",
                    secondProjectDscr: "Виконував роль керівника команди. Основні завдання включали управління робочими процесами, налаштування середовища розробки на Vite, перегляд і коригування Pull Requests, оновлення технічних залежностей і фінальні налаштування сайту, включаючи покращення макету.",
                    secondDscrSecondProject: "Платформа про здорове харчування, збалансовані дієти та свіжі овочі прямо з городу. Лише натуральні продукти для вашого здоров'я.",
                    mustage: "3. Mustage",
                    firstDscrThirdProject: "Адаптивна лендинг-сторінка з клікабельними кнопками. Для її створення були використані анімації та стандартний набір інструментів фронтенду. Підтримує темний та світлий режим.",
                
                    contactMe: "Зв'язок зі мною",
                    requirements: "Якщо мої навички відповідають вашим вимогам, я буду радий обговорити подальші кроки. Ви можете зв'язатися зі мною через електронну пошту або телеграм",
                    submit: "Відправити",
                    onlyMyName: "Денис",
                    waysToContact: "Інші способи зв'язатися зі мною",
                    navigation: "Навiгацiя по сайту",
                    general: "Головна",
                    beGladToCooperate: "Я буду радий нашій співпраці.",
                }
            }
        },
        interpolation: { escapeValue: false }
    }, function () {
        updateText();
    });

    document.getElementById("languageSwitcher").addEventListener("click", () => {
        const newLang = i18next.language === "en" ? "ua" : "en";
        i18next.changeLanguage(newLang, () => {
            updateText();
        });
    });
}
