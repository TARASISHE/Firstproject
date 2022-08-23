
const menuLang = document.querySelector('.menu__lang');
const subList = document.querySelector('.menu__sub-list');
const uaShow = document.querySelector('.uashow')
const enHidden = document.querySelector('.enhidden');
const markedEn = document.querySelector('.menu__sub-enlang');
const markedUa = document.querySelector('.menu__sub-ualang');
const langHidden = document.querySelector('.menu__langhidden');
const uaShowSmall = document.querySelector('.uashowsmall')
const enHiddenSmall = document.querySelector('.enhiddensmall');

const langArr = {
    "en_1": {
        "ua": "Головна",
        "en": "Main"
    },
    "en_2": {
        "ua": "Наші програми",
        "en": "Our programs"
    },
    "en_3": {
        "ua": "Про нас",
        "en": "About us"
    },
    "en_4": {
        "ua": "Наша місія",
        "en": "Our mission"
    },
    "en_5": {
        "ua": "Контакти",
        "en": "Contacts"
    },
    "en_6": {
        "ua": "Хочу допомогти",
        "en": "Want to help",
    },
    "en_7": {
        "ua": "Волонтерьска спільнота",
        "en": "Volunteer community",
    },
    "en_8": {
        "ua": "Благородно тільки те, що безкорисливо",
        "en": "Noble is that which is not selfless",
    },
    "en_9": {
        "ua": "Отримати допомогу",
        "en": "Get help",
    },
    "en_10": {
        "ua": "Ваше ім'я*",
        "en": "User name*",
    },
    "en_11": {
        "ua": "Відправити ",
        "en": "Send",
    },
    "en_12": {
        "ua": "Скасувати",
        "en": "Cancel",
    },
    "en_13": {
        "ua": "Допомога військовим",
        "en": "Military help",
    },
    "en_14": {
        "ua": "Допомога населенню",
        "en": "Public help",
    },
    "en_15": {
        "ua": "Документи",
        "en": "Documents",
    },
    "en_16": {
        "ua": "Звіти",
        "en": "Reports",
    },
    "en_17": {
        "ua": "Ми активно ведемо наш телеграм канал для того щоб ви могли стежити за роботою нашого фонду",
        "en": "We actively maintain our Telegram channel  so that you can follow the work of our foundation",
    },
    "en_18": {
        "ua": "Ми у соцмережах:",
        "en": "Our socials:",
    },
    "en_19": {
        "ua": "Благодійність - це процес, який передбачає дотримання механізму, правила якого поширюються на всіх без винятку його учасників:фізичних і юридичних осіб. Хочемо розповісти вам про наші основні принципи благодійності:",
        "en": "Charity is a process that involves following a mechanism whose rules apply to all its members without exception:individuals and legal entities. We would like to tell you about our main principles of charity:",
    },
    "en_20": {
        "ua": "Безкорисливість",
        "en": "Selflessness",
    },
    "en_21": {
        "ua": "Будь-яка благодійна допомога повинна надаватися на безоплатній основі, інакше вона втрачає будь-який сенс. Перед початком роботи потрібно відповісти на питання про те, яку мету ви переслідуєте. Саме вона визначає мотивацію, а також визначать вектор подальших дій. Мета не повинна бути корисливою - принести суспільству користь допоможе усвідомлений вибір, без ілюзій і надій.",
        "en": "Any charitable assistance must be provided free of charge, otherwise it loses all meaning. Before starting work, you need to answer the question about what goal you are pursuing. It is she who determines the motivation, and will also determine the vector of further actions. The goal should not be self-serving - a conscious choice, without illusions and hopes, will help bring benefit to society.",
    },
    "en_22": {
        "ua": "Добровільність",
        "en": "Voluntariness",
    },
    "en_23": {
        "ua": "Рішення про участь у благодійності повинно бути добровільним, за умови відсутності впливу зовнішніх факторів. Також варто приділити увагу чесності. У даній сфері діяльності людям завжди буде, що ділити: репутацію, фінансування проектів і т.д. Без співпраці ви навряд чи зможете досягти результату, тому необхідно шукати однодумців, прагнути до партнерства, вчитися домовлятися.",
        "en": "The decision to participate in charity should be voluntary, provided there is no influence of external factors. It is also worth paying attention to honesty. In this field of activity, people will always have something to share: reputation, project financing, etc. Without cooperation, you will hardly be able to achieve a result, therefore it is necessary to look for like-minded people, strive for partnership, and learn to negotiate.",
    },
    "en_24": {
        "ua": "Честність",
        "en": "Honesty",
    },
}

if (menuLang) {
    menuLang.addEventListener("click", (e) => {
        subList.classList.toggle('_open');
        checkOpenList();
    });
}

if (langHidden) {
    langHidden.addEventListener("click", (e) => {
        subList.classList.toggle('_open');
        checkOpenList();
    });
}



function checkOpenList() {
    if (subList.classList.contains('_open')) {
        subList.addEventListener("click", langListener)
    } else {
        subList.removeEventListener("click", langListener)
    }
}

const langListener = (e) => {
    const lang = e.target.closest('LI').getAttribute('data-lang');
    localStorage.setItem("storageLang", lang)
    subList.classList.remove('_open');
    enHidden.classList.toggle('_open');
    uaShow.classList.toggle('_close');
    enHiddenSmall.classList.toggle('_open');
    uaShowSmall.classList.toggle('_close');
    changeLang(lang);
    markLangEng();
};





// что б в cаб ліст відображався змінена мова
//розділити файли по змісту попап к попапу і тд

function markLangEng() {
    if (enHidden.classList.contains('_open')) {
        markedEn.classList.add('_chosen');
        markedUa.classList.add('_notchosen');
    } else {
        markedEn.classList.remove('_chosen');
        markedUa.classList.remove('_notchosen');
    }
}



function changeLang(lang) {
    let chooseDefi = Object.keys(langArr);
    chooseDefi.forEach(langKey => {
        let elemForTrans = document.querySelectorAll(`[lang-key="${langKey}"]`);
        for (let element of elemForTrans) {
            element.textContent = langArr[langKey][lang];

        }
    });
}

function checkCurrentLng() {
    const currentLng = localStorage.getItem('storageLang');
    if (currentLng) {
        changeLang(currentLng);
        if (currentLng === 'en') {
            enHidden.classList.add('_open');
            uaShow.classList.add('_close');
        }
    }
}

