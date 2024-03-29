const bi_search = document.querySelector('.bi-search')
const search = document.querySelector('.search')
const home_nav_click = document.getElementById('home_nav_click');
if (home_nav_click) {
  home_nav_click.addEventListener('click' , ()=>{
    home_nav_click.classList.toggle('active');
  })
}
if (bi_search) {
  bi_search.addEventListener('click', e => {
    search.classList.toggle('active')
  })
}

const Images = document.querySelector('#imgs_sec')
const img_rightside = document.querySelector('#img_rightside')

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
      img_rightside.style.transform = 'scale(1.05)'
      img_rightside.style.transition = "8s ease-in-out";
      if (i < 2) {
        i++
      } else {
        i = 0
        img_rightside.style.transform = 'scale(1.25)'
        img_rightside.style.transition = "8s ease-in-out";
      }
    }
    setTimeout(' ChangeImg() ', 6000)
  }
}

window.onload = ChangeImg

//jquery izotope

$(".grid").isotope({
  itemSelector: ".portfolio_list",
  layoutMode: "fitRows",
});
$("#filter_cart ul li").click(function () {
  $("#filter_cart ul li").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".grid").isotope({
    filter: selector,
  });
  return false;
});

const list_category_click = document.querySelector('#list_category');
const open_list_category = document.querySelector('#open_list_category');

if (list_category_click) {
  list_category_click.addEventListener('click' , ()=>{
    open_list_category.classList.toggle('active')
  })
}

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
  if (window.top.scrollY > 900) {
    upbutton.classList.add('active');

  }
  else {
    upbutton.classList.remove('active');
  }
})


const home_click = document.getElementById("home_click");
const nav_home_click = document.getElementById("nav_home_click");
if (home_click) {
  home_click.addEventListener('click', () => {
    nav_home_click.classList.toggle('active')

  })
}
const pages_click = document.getElementById("pages_click");
const nav_page_click = document.getElementById("nav_page_click");
if (pages_click) {
  pages_click.addEventListener('click', () => {
    nav_page_click.classList.toggle('active')

  })
}
const shop_click = document.getElementById("shop_click");
const nav_shop_click = document.getElementById("nav_shop_click");
if (shop_click) {
  shop_click.addEventListener('click', () => {
    nav_shop_click.classList.toggle('active')

  })
}
const porto_click = document.getElementById("porto_click");
const nav_porto_click = document.getElementById("nav_porto_click");
if (porto_click) {
  porto_click.addEventListener('click', () => {
    nav_porto_click.classList.toggle('active')

  })
}
const blog_click = document.getElementById("blog_click");
const nav_blog_click = document.getElementById("nav_blog_click");
if (blog_click) {
  blog_click.addEventListener('click', () => {
    nav_blog_click.classList.toggle('active')

  })
}
const ele_click = document.getElementById("ele_click");
const nav_ele_click = document.getElementById("nav_ele_click");
if (ele_click) {
  ele_click.addEventListener('click', () => {
    nav_ele_click.classList.toggle('active')

  })
}

const bi_click_list = document.querySelector(".bi-list");
const nav_menu_click = document.querySelector("#nav_menu_click");
const close_nav_list = document.querySelector(".close_nav_list");

if (bi_click_list) {

  bi_click_list.addEventListener("click", () => {
    nav_menu_click.style.display = "block"
  })

}
if (close_nav_list) {

  close_nav_list.addEventListener("click", () => {
    nav_menu_click.style.display = "none"
  })

}

// add to cart

const cart_add_hover = document.querySelectorAll('#cart_add_hover');
const hover_cart = document.querySelector('.hover_cart');
if (cart_add_hover) {
  for (const but of cart_add_hover)
    but.addEventListener('click', e => {
      var parent = e.target.parentNode.parentNode
      console.log(parent);
      var clone = parent.cloneNode(true)
      hover_cart.appendChild(clone)
    })
}

const add_count = document.querySelector('#add_count');
var count = 0;
if (cart_add_hover) {
  for (let index = 0; index < cart_add_hover.length; index++) {
    cart_add_hover[index].addEventListener('click', () => {
      // modal_side.innerHTML += `<i class="bi bi-trash" onclick = "del(this)" ></i>`
      add_count.innerText = count++
    })
  }
}