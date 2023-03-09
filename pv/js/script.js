
// Acordion Modulos
function initAccordion(){
const acordionList = document.querySelectorAll('.acordion-title');
acordionList[0].classList.add('ativo');
acordionList[0].nextElementSibling.classList.add('ativo');

function activeAcordion() {
  this.classList.toggle('ativo')
  this.nextElementSibling.classList.toggle('ativo');
}

acordionList.forEach((item) => {
  item.addEventListener('click', activeAcordion);
});

}
initAccordion();

// Scroll Section Fixed
function initActiveScrollFixed(){
const sectionFixed = document.querySelector('.sticky-container');
const windowMetade = window.innerHeight * 0.6;

function ativaScroll(){
  if(this.scrollY >= windowMetade) sectionFixed.classList.add('show-scroll'); else sectionFixed.classList.remove('show-scroll');
}
window.addEventListener('scroll', ativaScroll);

}
initActiveScrollFixed();

