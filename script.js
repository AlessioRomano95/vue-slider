console.log('js ok')

// 1
const itemsWrapper = document.querySelector('.items-wrapper');
const topC = document.querySelector('.top');
const botC = document.querySelector('.bottom');

topC.classList.add('hide')

// 2

const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
]

let counterImg = 0;

// 3
for(let i = 0; i < images.length; i++){
  const img = images [i];
  itemsWrapper.innerHTML += `<img class="img hide" src="${img}">`
}

// 4
const itemsCollection = document.getElementsByClassName('img');
itemsCollection[counterImg].classList.remove('hide');

// 5
topC.addEventListener('click', function(){    
  botC.classList.remove('hide')
  itemsCollection[counterImg].classList.add('hide');
  counterImg--;
  if(counterImg === 0){
    topC.classList.add('hide')
  }

  // 6
  itemsCollection[counterImg].classList.remove('hide');
})

// 7
botC.addEventListener('click', function(){
  topC.classList.remove('hide')
  itemsCollection[counterImg].classList.add('hide');
  counterImg++;

  itemsCollection[counterImg].classList.remove('hide');
  if(counterImg === images.length -1){
    botC.classList.add('hide')
  }
})

//8 autoplay
function nextSlide() {
  itemsCollection[counterImg].classList.add('hide');
  counterImg++;
  if (counterImg === images.length) {
      counterImg = 0;
  }
  itemsCollection[counterImg].classList.remove('hide');
}

//9 Funzione per avviare l'autoplay
function startAutoplay() {
  interval = setInterval(nextSlide, 3000);
}

//10 Avvia l'autoplay all'avvio dello script
startAutoplay();

//11 Ferma l'autoplay quando si passa sopra a una slide
itemsWrapper.addEventListener('mouseover', function() {
  clearInterval(interval);
});

//12 Riprende l'autoplay quando si esce dalla slide
itemsWrapper.addEventListener('mouseout', function() {
  startAutoplay();
});