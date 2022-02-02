const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


let slideScorrevoli='';
let slides = '';

for (let i = 0; i < images.length; i++) {

    slides +=  `<div class="item">
                    <img src="${images[i]}">
                    <div class="text">
                    <h3>${title[i]}</h3>
                    <p>${text[i]}</p>
                </div>
                </div>`;

     slideScorrevoli+= `<div class="item-scorrevoli">
                            <img src="${images[i]}">
                        </div>`
                        

                

    

    

}

//creo le slide
let itemsContainer = document.querySelector('.slide-principale');
itemsContainer.innerHTML=slides;
console.log(itemsContainer)

let slideContainer = document.querySelector('.slide-scorrevoli');
slideContainer.innerHTML+=slideScorrevoli;
console.log(itemsContainer)



// inizializzo una variabile che mi tenga traccia della slide attiva
let currentSlide = 0;

let items = document.getElementsByClassName('item');
items[currentSlide].classList.add('active');
let itemScorrevoli=document.getElementsByClassName('item-scorrevoli');
itemScorrevoli[currentSlide].classList.add('active')
//Pulsante per scendere
let next= document.getElementById("next");
next.addEventListener('click',
    function(){
        if(currentSlide< items.length - 1){
            items[currentSlide].classList.remove('active');
            itemScorrevoli[currentSlide].classList.remove('active');
            currentSlide++
            items[currentSlide].classList.add('active');
            itemScorrevoli[currentSlide].classList.add('active');
        }else{
            items[currentSlide].classList.remove('active');
            itemScorrevoli[currentSlide].classList.remove('active');
            currentSlide=0;
            items[currentSlide].classList.add('active');
            itemScorrevoli[currentSlide].classList.add('active');
        }
    }
)
//Pulsante per salire
let prev= document.getElementById("prev");
prev.addEventListener('click',
    function(){
        if(currentSlide> 0){
            items[currentSlide].classList.remove('active');
            itemScorrevoli[currentSlide].classList.remove('active');
            currentSlide--
            items[currentSlide].classList.add('active');
            itemScorrevoli[currentSlide].classList.add('active');
        }else{
            items[currentSlide].classList.remove('active');
            itemScorrevoli[currentSlide].classList.remove('active');
            currentSlide= items.length-1
            items[currentSlide].classList.add('active');
            itemScorrevoli[currentSlide].classList.add('active');
        }
    }
)