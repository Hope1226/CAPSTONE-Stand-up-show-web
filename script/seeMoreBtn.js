const seeMoreBtn = document.querySelector('#comedian-see-more-btn');
const hiddenPart = document.querySelector('#hiddenInfo2');
const hiddenPart2 = document.querySelector('#hiddenInfo3');
const hiddenPart3 = document.querySelector('#hiddenInfo4');
const hiddenPart4 = document.querySelector('#hiddenInfo5');
const btnTxtMore = document.querySelector('#comedian-see-more-btn');

seeMoreBtn.addEventListener('click', () => {
  hiddenPart.classList.add('open');
  hiddenPart2.classList.add('open');
  hiddenPart3.classList.add('open');
  hiddenPart4.classList.add('open');
  btnTxtMore.style.display = 'none';
});
