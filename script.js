console.log('js ok')

const { createApp } = Vue;

createApp({
  data(){
    return{
      images: [
        'img/01.webp',
        'img/02.webp',
        'img/03.webp',
        'img/04.webp',
        'img/05.webp',
      ],
      counter: 0
    }
  },
  methods:{
    goNext(isNext){
      isNext ? this.counter++ : this.counter--;
      if(this.counter > this.images.length -1){
        this.counter = 0
      }else if(this.counter < 0){
        this.counter = this.images.length -1;
      }
    }
  },  
  

}).mount('#app')
