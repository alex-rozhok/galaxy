// переключатель цены
function changeTime(){
  let times = document.querySelectorAll('.times__item');

  for(let timeItem of times) {
      timeItem.classList.toggle('active')
  }
}
function changePrice() {
  let price =  document.querySelectorAll('.group__item');

    for (let priceItem of price){
      priceItem.classList.toggle('show');
    }
}
let priceBtn = document.getElementById('toggle');
priceBtn.addEventListener(  'click',()=>{
  changeTime();
  changePrice();
});
//--
//-- меню
// меняет кнопку
function activeBtn(){
  menuToggle.classList.add('active');
  menuToggle.removeEventListener('click',showMenu);
  menuToggle.addEventListener('click',unFixedTop);
}
function disBtn(){
  menuToggle.classList.remove('active');
}
// показ/скрыть меню
function showNavbar(){
  navbar.classList.add('show');
  fixedTop();

}
function hiddenNavbar(){
  navbar.classList.remove('show');
  unFixedTop();

}
// скролл body
function hiddenBody(){
  document.body.classList.add('hidden');
}
function scrollBody(){
  document.body.classList.remove('hidden');
}

// фикс топ
function fixedTop(){
  navbarTop.classList.add('fixed-top');
  activeBtn();
  hiddenBody();
}
function unFixedTop(){
  navbarTop.classList.remove('fixed-top');
  disBtn();
}

function showMenu(){
  showNavbar();
  fixedTop();
  menuToggle.removeEventListener('click',showMenu);
  menuToggle.addEventListener('click',hiddenMenu);

}
function hiddenMenu(){
  hiddenNavbar();
  scrollBody();
  menuToggle.addEventListener('click',showMenu);

}

let menuToggle = document.querySelector('.navbar__toggle');
let navbar = document.querySelector('.navbar__collapse');
let navbarTop = document.querySelector('.navbar-top');
menuToggle.addEventListener('click',showMenu);


//-
//- форма закакза

function closeModal() {
  formModal.classList.remove('show');
    modalWrap.classList.remove('show');
  menuToggle.removeEventListener('click', closeModal);
  menuToggle.addEventListener('click',showMenu);

scrollBody();
unFixedTop();
}


let orderButtons = document.querySelectorAll('.order__btn');
let close = document.querySelector('.close');
let closeVideo = document.querySelector('.close-video');


let formModal = document.querySelector('.form.modal');
let modalWrap = document.querySelector('.modal-wrapper');
for(let orderBtn of orderButtons) {
  orderBtn.addEventListener('click', ()=>{
    event.preventDefault();
      fixedTop();

      formModal.classList.add('show');
      modalWrap.classList.add('show');
      menuToggle.addEventListener('click', closeModal);
  })
}
close.addEventListener('click', closeModal);


// video

let videoBtn = document.querySelector('.video__link');
videoBtn.addEventListener('click',showVideo);
let video = document.querySelector('.video__modal');


function showVideo(){
  event.preventDefault();
  video.classList.add('show');
  fixedTop();

  menuToggle.addEventListener('click', hiddenVideo)
}

function hiddenVideo() {
  video.classList.remove('show');
  unFixedTop();
scrollBody();
menuToggle.addEventListener('click',showMenu);

}
closeVideo.addEventListener('click', hiddenVideo);
