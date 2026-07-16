(function(){
  const key='threemf-preview-language';
  const saved=localStorage.getItem(key);
  const browser=(navigator.language||'en').toLowerCase();
  let language=saved||(browser.startsWith('zh')?'zh':'en');
  function apply(){
    document.documentElement.lang=language==='zh'?'zh-CN':'en';
    document.querySelectorAll('[data-en][data-zh]').forEach(function(el){
      if(el.tagName==='INPUT'||el.tagName==='TEXTAREA') el.value=el.dataset[language];
      else el.textContent=el.dataset[language];
    });
    document.querySelectorAll('[data-language-toggle]').forEach(function(button){
      button.textContent=language==='zh'?'EN':'中文';
      button.setAttribute('aria-label',language==='zh'?'Switch to English':'切换到中文');
    });
  }
  document.querySelectorAll('[data-language-toggle]').forEach(function(button){button.addEventListener('click',function(){language=language==='zh'?'en':'zh';localStorage.setItem(key,language);apply();});});
  apply();
})();
