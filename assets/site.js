(function () {
  const root = document.documentElement;
  const langButton = document.getElementById('langToggle');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  function setLanguage(lang) {
    const next = lang === 'zh' ? 'zh' : 'en';

    root.dataset.lang = next;
    root.lang = next === 'zh' ? 'zh-CN' : 'en';

    if (langButton) {
      const label =
        next === 'en'
          ? '切换到中文'
          : 'Switch to English';

      langButton.setAttribute('aria-label', label);
      langButton.setAttribute('title', label);
    }
  }

  // 删除旧版本可能保存的语言状态
  localStorage.removeItem('siteLang');
  sessionStorage.removeItem('siteLang');

  localStorage.removeItem('siteLangV2');
  sessionStorage.removeItem('siteLangV2');

  localStorage.removeItem('siteLangV3');
  sessionStorage.removeItem('siteLangV3');

  localStorage.removeItem('siteLangV4');
  sessionStorage.removeItem('siteLangV4');

  localStorage.removeItem('siteLangV5');
  sessionStorage.removeItem('siteLangV5');

  localStorage.removeItem('siteLangV6');
  sessionStorage.removeItem('siteLangV6');

  // 每次打开页面都先显示英文
  setLanguage('en');

  if (langButton) {
    langButton.addEventListener('click', () => {
      const nextLanguage =
        root.dataset.lang === 'en'
          ? 'zh'
          : 'en';

      setLanguage(nextLanguage);
    });
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');

      menuButton.setAttribute(
        'aria-expanded',
        String(open)
      );

      menuButton.textContent = open ? '×' : '☰';
    });
  }
})();
