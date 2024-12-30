const pressedOptionSelector = '[data-theme][aria-pressed="true"]';
const defaultTheme = 'pastel';

const applyTheme = (theme) => {
  const target = document.querySelector(`[data-theme="${theme}"]`);
  document.documentElement.setAttribute("data-selected-theme", theme);
  document.querySelector(pressedOptionSelector).setAttribute('aria-pressed', 'false');
  target.setAttribute('aria-pressed', 'true');
};

const handleThemeSelection = (event) => {
  const target = event.target;
  const isPressed = target.getAttribute('aria-pressed');
  const theme = target.getAttribute('data-theme');        
  
  if(isPressed !== "true") {
    applyTheme(theme);
    localStorage.setItem('selected-theme', theme);
    location.reload();
  }
}

const setInitialTheme = () => {
  const savedTheme = localStorage.getItem('selected-theme');
  if(savedTheme && savedTheme !== defaultTheme) {
    applyTheme(savedTheme);
  }
};

setInitialTheme();

const themeSwitcher = document.querySelector('.theme-switcher');
const options = themeSwitcher.querySelectorAll('option');

options.forEach((option) => {
   option.addEventListener('click', handleThemeSelection);
});

