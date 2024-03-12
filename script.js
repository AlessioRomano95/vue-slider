///////////////////////////// 
//Ho problemi di connessione da 1 settimana ( problemi alla centralina vodaphone del quartiere ) ieri notte lo avevano fixato, ma oggi pomeriggio ha smesso di nuovo di funzionare,
// non avevo più internet a casa e ho finito i gb dal telefono da giorni.
// purtroppo non ho potuto fare nemmeno un commit, ma per evitare di rimanere indietro ho continuato a lavorare//
//spero non sia un grossissimo problema ma non potevo permettermi di fermarmi ho troppi esercizi ancora non finiti//




const images = [
  {
      url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
      title: 'Svezia',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
  {
      url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Perù',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
  {
      url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
      title: 'Chile',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
  {
      url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Argentina',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
  {
      url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
      title: 'Colombia',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
];


// Elementi DOM
const myNext = document.querySelector(".my-next");
const myPrevius = document.querySelector(".my-previous");
const myCarousel = document.querySelector(".my-carousel-images");
const myThumbnails = document.querySelector(".my-thumbnails");
const btnsx = document.getElementById("btnsx");
const btndx = document.getElementById("btndx");

let currentIndex = 0;
let interval;


// Carica le immagini nel carosello
images.forEach((image, index) => {
  myCarousel.innerHTML += `
      <div class="my-carousel-item">
          <img class="img-fluid" src="${image.url}" alt="${image.title}">
          <div class="item-description px-3">
              <h2>${image.title}</h2>
              <p>${image.description}</p>
          </div>
      </div>
  `;
  myThumbnails.innerHTML += `
      <div class="my-thumbnail" data-index="${index}">
          <img class="img-fluid" src="${image.url}" alt="${image.title}">
      </div>
  `;
});

// Inizializza il carosello
const carouselItems = document.querySelectorAll('.my-carousel-item');
const thumbnails = document.querySelectorAll('.my-thumbnail');
toggleActive(currentIndex);

// event listener per il pulsante "Successivo"
myNext.addEventListener("click", () => { 
  clickNext();
});

// event listener per il pulsante "Precedente"
myPrevius.addEventListener("click", () => { 
  clickPrev();
});

// event listener per le miniature
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
      currentIndex = index;
      toggleActive(currentIndex);
  });
});

// Funzione per passare all'immagine successiva
function clickNext() {
  currentIndex++;
  if (currentIndex === images.length) { 
      currentIndex = 0;
  }
  toggleActive(currentIndex);
}

// Funzione per passare all'immagine precedente
function clickPrev() {
  currentIndex--;
  if (currentIndex < 0) { 
      currentIndex = images.length - 1;
  }
  toggleActive(currentIndex);
}

// Funzione per impostare l'elemento attivo
function toggleActive(index) {
  carouselItems.forEach(item => item.classList.remove('active'));
  thumbnails.forEach(thumb => thumb.classList.remove('active'));
  carouselItems[index].classList.add('active');
  thumbnails[index].classList.add('active');
}

// Avvia il ciclo di scorrimento automatico
interval = setInterval(clickNext, 3000);