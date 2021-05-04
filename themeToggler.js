const button = document.querySelector('#icon-button');
const span = document.querySelector('#icon');

document.querySelector('.icon-container').addEventListener('click', (event) => {
  const elementId = event.target.id;

  switch(elementId) {
    case 'icon-button':
      if (button.getAttribute('data-theme') === 'dark-theme') {
        darkMode();
      } else {
        lightMode();
      }
      break;
    case 'icon':
      if (button.getAttribute('data-theme') === 'dark-theme') {
        darkMode();
      } else {
        lightMode();
      }
      break;
  }
})

function darkMode() {
  button.setAttribute('data-theme', 'light-theme');
  span.textContent = 'light_mode';
  document.body.setAttribute('class', 'dark-mode');
}

function lightMode() {
  button.setAttribute('data-theme', 'dark-theme');
  span.textContent = 'dark_mode';
  document.body.setAttribute('class', 'light-mode');
}