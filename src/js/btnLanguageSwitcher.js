import i18next from "i18next";

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: { 
        about: 'About me'
      }
    },
    uk: {
      translation: {
        about: "Про мене"
      }
    }
  }
})



export function toggleLanguage() {
 

  const waitForElement = (selector, callback) => {
    const element = document.querySelector(selector);
    if (element) return callback(element);

    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        observer.disconnect();
        callback(element);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  };

  waitForElement("#languageSwitcher", (languageSwitcher) => {
  const userLang = navigator.language || navigator.userLanguage
  const isEnglish = userLang.startsWith('en')
  i18next.changeLanguage(isEnglish ? 'en' : 'uk')
    
    languageSwitcher.textContent = i18next.t('')
    
updateTranslations()

    if (isEnglish) {
      languageSwitcher.classList.add('usa')
    } else {
      languageSwitcher.classList.add("ukraine");
    }

    languageSwitcher.addEventListener("click", () => {
      if (languageSwitcher.classList.contains("ukraine")) {
        languageSwitcher.classList.remove("ukraine");
        languageSwitcher.classList.add("usa");
i18next.changeLanguage('en');
      } else {
        languageSwitcher.classList.remove("usa");
        languageSwitcher.classList.add("ukraine");
i18next.changeLanguage('uk');
      }
      updateTranslations()
    });
  });
}
function updateTranslations() {
  const elementsToTranslate = document.querySelectorAll(["id"])
  

  elementsToTranslate.forEach((el) => {
    const key = el.id
    el.textContent = i18next.t(key)
  })
}