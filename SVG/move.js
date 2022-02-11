const btn = document.querySelector('.j-btn-test');
const svg1 =  document.querySelector('.bi-arrow-down-left-circle');

const svg2 =  document.querySelector('.bi-arrow-down-left-circle-fill');
btn.addEventListener('click', () => {
  btn.classList.toggle('btn--magic');
  svg1.classList.toggle('hidden');
  svg2.classList.toggle('hidden');
});
