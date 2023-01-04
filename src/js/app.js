const bi_search = document.querySelector('.bi-search')
const search = document.querySelector('.search')

if (bi_search) {
  bi_search.addEventListener('click', e => {
    search.classList.toggle('active')
  })
}

const Images = document.querySelector('#imgs_sec')

Images[0] =
  'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background.jpg'
Images[1] =
  'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-2.jpg'
Images[2] =
  'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-3.jpg'

for (let i = 0; i < 3; i++) {
  function ChangeImg() {
    Images.src = Images[i]

    if (Images) {
      Images.style.transform = 'scale(1.35)'

      if (i < 2) {
        i++
      } else {
        i = 0
        Images.style.transform = 'scale(1.25)'
      }
    }

    setTimeout(' ChangeImg() ', 5000)
  }
}

window.onload = ChangeImg



//jquery izotope

$(".grid").isotope({
  itemSelector: ".portfolio_list",
  layoutMode: "fitRows",
});
$(".list ul li").click(function () {
  $(".list ul li").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".grid").isotope({
    filter: selector,
  });
  return false;
});



// swiper 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".bi-arrow-right",
    prevEl: ".bi-arrow-left",
  },
  // breakpoints: {

  //   1024: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   1600: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  // },
});

// navbar scroll fixed 

let navbar = document.querySelector('#nav1');
document.addEventListener('scroll', () => {
  if (window.top.scrollY > 200) {
    navbar.classList.add('scroll');

  }
  else {
    navbar.classList.remove('scroll');
  }
})

// scroll upbutton

let upbutton = document.querySelector('#scroll_topbutton');
document.addEventListener('scroll', () => {
  if (window.top.scrollY > 500) {
    upbutton.classList.add('active');

  }
  else {
    upbutton.classList.remove('active');
  }
})