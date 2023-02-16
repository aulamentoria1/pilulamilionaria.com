

const botaoAbrir = document.querySelectorAll('.btn');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event){
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function CliqueForaModal(event){
    if(event.target === this){
      toggleModal(event);
    }
  }

  botaoAbrir.forEach((item) => {
    item.addEventListener('click', toggleModal);
  });

botaoFechar.addEventListener('click', toggleModal);
containerModal.addEventListener('click', CliqueForaModal);

