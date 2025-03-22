export function toggleLanguage() {
  console.log("✅ toggleLanguage() вызвана");

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
    console.log("✅ Кнопка найдена:", languageSwitcher);

    const userLang = navigator.language || navigator.userLanguage
    console.log("🌍 Язык браузера:", userLang);

    const isEnglish = userLang.startsWith('en')

    if (isEnglish) {
      languageSwitcher.classList.add('usa')
    } else {
      languageSwitcher.classList.add("ukraine");
    }

    languageSwitcher.addEventListener("click", () => {
      if (languageSwitcher.classList.contains("ukraine")) {
        languageSwitcher.classList.remove("ukraine");
        languageSwitcher.classList.add("usa");
        console.log("🇺🇸 Переключено на английский");
      } else {
        languageSwitcher.classList.remove("usa");
        languageSwitcher.classList.add("ukraine");
        console.log("🇺🇦 Переключено на украинский");
      }
    });
  });
}
