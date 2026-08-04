(function () {
  const root = document.documentElement;
  const langButton = document.getElementById('langToggle');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  // A new key is used for this deployment so that language choices saved by
  // older versions cannot force the website back to Chinese.
  const STORAGE_KEY = 'centerSiteLanguage_20260804_v6';

  function removeOldLanguageSettings() {
    const oldKeys = [
      'siteLang',
      'siteLangV2',
      'siteLangV3',
      'siteLangV4',
      'siteLangV5'
    ];

    oldKeys.forEach((key) => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        // Storage may be unavailable in privacy mode; the site can still work.
      }

      try {
        sessionStorage.removeItem(key);
      } catch (error) {
        // Storage may be unavailable in privacy mode; the site can still work.
      }
    });
  }

  function readSavedLanguage() {
    try {
      return sessionStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(lang) {
    try {
      sessionStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // Ignore storage failures and keep the current page functional.
    }
  }

  function setLanguage(lang, save = true) {
    const next = lang === 'zh' ? 'zh' : 'en';

    root.dataset.lang = next;
    root.lang = next === 'zh' ? 'zh-CN' : 'en';

    if (langButton) {
      const label = next === 'en'
        ? '切换到中文'
        : 'Switch to English';

      langButton.setAttribute('aria-label', label);
      langButton.setAttribute('title', label);
    }

    if (save) {
      saveLanguage(next);
    }
  }

  removeOldLanguageSettings();

  // English is used when this version is opened for the first time.
  // A manual language choice is retained only within the current tab.
  setLanguage(readSavedLanguage() || 'en', false);

  if (langButton) {
    langButton.addEventListener('click', () => {
      setLanguage(root.dataset.lang === 'en' ? 'zh' : 'en');
    });
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? '×' : '☰';
    });
  }
})();
