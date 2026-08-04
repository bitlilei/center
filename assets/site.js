
(function () {
  const root = document.documentElement;
  const langButton = document.getElementById('langToggle');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  function setLanguage(lang) {
    const next = lang === 'en' ? 'en' : 'zh';
    root.dataset.lang = next;
    root.lang = next === 'zh' ? 'zh-CN' : 'en';
    if (langButton) {
      langButton.setAttribute('aria-label', next === 'zh' ? '切换到英文' : 'Switch to Chinese');
      langButton.setAttribute('title', next === 'zh' ? '切换到英文' : 'Switch to Chinese');
    }
    sessionStorage.setItem('siteLang', next);
  }

  setLanguage(sessionStorage.getItem('siteLang') || 'en');
  if (langButton) langButton.addEventListener('click', () => setLanguage(root.dataset.lang === 'zh' ? 'en' : 'zh'));
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? '×' : '☰';
    });
  }
})();
