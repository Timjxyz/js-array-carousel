const itemss = [
    {
        photo: 'img/01.jpg',
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
    },
    {
        photo: 'img/02.jpg',
        title: "Svizzera",
        text: "Lorem ipsum."
    },
    {
        photo: 'img/03.jpg',
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        photo: 'img/04.jpg',
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
    },
    {
        photo: 'img/05.jpg',
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
    }
];

let slideScorrevoli='';
let slides = '';

for (let i = 0; i < itemss.length; i++) {

    slides +=  `<div class="item">
                    <img src="${itemss[i].photo}">
                    <div class="text">
                    <h3>${itemss[i].title}</h3>
                    <p>${itemss[i].text}</p>
                </div>
                </div>`;

     slideScorrevoli+= `<div class="item-scorrevoli">
                            <img src="${itemss[i].photo}">
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