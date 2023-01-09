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
  if (window.top.scrollY > 300) {
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