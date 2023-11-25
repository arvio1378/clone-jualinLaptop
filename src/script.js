//dropdown pada form
const dropdown = document.querySelector("#dropdown");
const logoDrop = document.querySelector("#logoDrop");
const drop = document.querySelector("#drop");

dropdown.addEventListener("click", function(){

    if(logoDrop.classList.contains("fa-caret-down")) {
        logoDrop.classList.remove("fa-caret-down");
        logoDrop.classList.add("fa-caret-up");
        drop.classList.remove("hidden");
    } else if (logoDrop.classList.contains("fa-caret-up")){
        logoDrop.classList.remove("fa-caret-up");
        logoDrop.classList.add("fa-caret-down");
        drop.classList.add("hidden");
    }

})

// tabel pertanyaan umum agar pada saat menekan "+" muncul isinya dan tekan "-" hilangkan isinya
const head = document.querySelectorAll(".head");
const tabel = document.querySelector(".tabel");
const plus = document.querySelectorAll(".plus");
const info = document.querySelectorAll(".info");

tabel.addEventListener("click", function(e){

    // pada saat klik muncul isi tabelnya
    if(e.target.classList.contains("head")){

        const minus = e.target.children[0];
        const muncul = e.target.parentNode.nextElementSibling;

        plus.forEach(function(plus){
            plus.classList.add("fa-plus");
        })

        info.forEach(function(info){
            info.classList.remove("h-full");
        })

        minus.classList.remove("fa-plus");
        minus.classList.add("fa-minus");
        muncul.classList.add("h-full");

    }

})

// pengaturan untuk tombol ke atas
const atas = document.querySelector(".atas");

atas.addEventListener("click", function(){
    document.documentElement.scrollTop = 0;
})

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.documentElement.scrollTop == 0){
        atas.classList.add("hidden");
    } else {
        atas.classList.remove("hidden");
    }
}

// slider pada gambar
const left = document.querySelector(".fa-chevron-left");
const right = document.querySelector(".fa-chevron-right");

$('.slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    nextArrow: right,
    prevArrow: left,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });

// pada saat menu diklik maka muncul menu
const btnMenu = document.querySelector(".btnMenu");
const menu = document.querySelector(".menu");
const tutup = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

btnMenu.addEventListener("click", function(){
    menu.classList.toggle("max-md:-translate-x-[100%]");
    tutup.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
})

tutup.addEventListener("click", function(){
    tutup.classList.toggle("hidden");
    menu.classList.toggle("max-md:-translate-x-[100%]");
    overlay.classList.toggle("hidden");
})