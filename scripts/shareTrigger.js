const shareToggle = document.querySelector('.share__toggle');
const share = document.querySelector('.share');

shareToggle.addEventListener('click', () => {
  shareToggle.classList.toggle('share__toggle--active')
  share.classList.toggle('share--active');
})