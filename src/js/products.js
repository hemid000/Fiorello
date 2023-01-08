const bi_search = document.querySelector('.bi-search')
const search = document.querySelector('.search')
if (bi_search) {
  bi_search.addEventListener('click', e => {
    search.classList.toggle('active')
  })
}

const list_category_click = document.querySelector('#list_category')
const open_list_category = document.querySelector('#open_list_category')

if (list_category_click) {
  list_category_click.addEventListener('click', () => {
    open_list_category.classList.toggle('active')
  })
}

// navbar scroll fixed

let navbar = document.querySelector('#nav1')
document.addEventListener('scroll', () => {
  if (window.top.scrollY > 200) {
    navbar.classList.add('scroll')
  } else {
    navbar.classList.remove('scroll')
  }
})

// scroll upbutton

let upbutton = document.querySelector('#scroll_topbutton')
document.addEventListener('scroll', () => {
  if (window.top.scrollY > 300) {
    upbutton.classList.add('active')
  } else {
    upbutton.classList.remove('active')
  }
})

const home_click = document.getElementById('home_click')
const nav_home_click = document.getElementById('nav_home_click')
if (home_click) {
  home_click.addEventListener('click', () => {
    nav_home_click.classList.toggle('active')
  })
}
const pages_click = document.getElementById('pages_click')
const nav_page_click = document.getElementById('nav_page_click')
if (pages_click) {
  pages_click.addEventListener('click', () => {
    nav_page_click.classList.toggle('active')
  })
}
const shop_click = document.getElementById('shop_click')
const nav_shop_click = document.getElementById('nav_shop_click')
if (shop_click) {
  shop_click.addEventListener('click', () => {
    nav_shop_click.classList.toggle('active')
  })
}
const porto_click = document.getElementById('porto_click')
const nav_porto_click = document.getElementById('nav_porto_click')
if (porto_click) {
  porto_click.addEventListener('click', () => {
    nav_porto_click.classList.toggle('active')
  })
}
const blog_click = document.getElementById('blog_click')
const nav_blog_click = document.getElementById('nav_blog_click')
if (blog_click) {
  blog_click.addEventListener('click', () => {
    nav_blog_click.classList.toggle('active')
  })
}
const ele_click = document.getElementById('ele_click')
const nav_ele_click = document.getElementById('nav_ele_click')
if (ele_click) {
  ele_click.addEventListener('click', () => {
    nav_ele_click.classList.toggle('active')
  })
}

const bi_click_list = document.querySelector('.bi-list')
const nav_menu_click = document.querySelector('#nav_menu_click')
const close_nav_list = document.querySelector('.close_nav_list')

if (bi_click_list) {
  bi_click_list.addEventListener('click', () => {
    nav_menu_click.style.display = 'block'
  })
}
if (close_nav_list) {
  close_nav_list.addEventListener('click', () => {
    nav_menu_click.style.display = 'none'
  })
}

// plus minus

const plus = document.querySelectorAll('#plus')
const minus = document.querySelectorAll('#minus')
const text_pm = document.querySelector('#text_pm')

if (plus) {
  for (let index = 0; index < plus.length; index++) {
    const element = plus[index]
    element.addEventListener('click', () => {
      if (text_pm.value > 0) {
        text_pm.value++
      } else {
        text_pm.value++
      }
    })
  }
}
if (minus) {
  for (let index = 0; index < minus.length; index++) {
    const element = minus[index]
    element.addEventListener('click', () => {
      if (text_pm.value > 0) {
        text_pm.value--
      }
    })
  }
}

// filter cart-info

const decription = document.querySelector('#decription')
const describtion_filter = document.querySelector('.describtion_filter')

const list_color = document.querySelector('.list_color')

if (decription) {
  decription.addEventListener('click', () => {
    decription.style.background = '#f34f3f'
    decription.style.color = 'white'
    additional_info.style.background = 'white'
    additional_info.style.color = '#696969'
    review_info.style.background = 'white'
    review_info.style.color = '#696969'
    describtion_filter.style.display = 'block'
    add_info.style.display = 'none'
    reviews.style.display = 'none'
  })
}
const additional_info = document.querySelector('#additional_info')
const add_info = document.querySelector('.add_info')

if (additional_info) {
  additional_info.addEventListener('click', () => {
    review_info.style.background = 'white'
    review_info.style.color = '#696969'
    additional_info.style.background = '#f34f3f'
    additional_info.style.color = 'white'
    decription.style.background = 'white'
    decription.style.color = '#696969'
    add_info.style.display = 'block'
    describtion_filter.style.display = 'none'
    reviews.style.display = 'none'
  })
}

const review_info = document.querySelector('#review_info')
const reviews = document.querySelector('.reviews')
if (review_info) {
  review_info.addEventListener('click', () => {
    decription.style.background = 'white'
    decription.style.color = '#696969'
    additional_info.style.background = 'white'
    additional_info.style.color = '#696969'
    review_info.style.background = '#f34f3f'
    review_info.style.color = 'white'

    add_info.style.display = 'none'
    describtion_filter.style.display = 'none'
    reviews.style.display = 'block'
  })
}

// img click
const first = document.querySelector('#first')
const modal_zoom_img = document.querySelector('.modal_zoom_img')
const second = document.querySelector('#second')
const modal_zoom_img2 = document.querySelector('.modal_zoom_img2')
const third = document.querySelector('#third')
const modal_zoom_img3 = document.querySelector('.modal_zoom_img3')
const fifth = document.querySelector('#fifth')
const modal_zoom_img4= document.querySelector('.modal_zoom_img4')
const fourth = document.querySelector('#fourth')
const modal_zoom_img5 = document.querySelector('.modal_zoom_img5')


if (first) {
  first.addEventListener('click' , ()=>{
    modal_zoom_img.style.visibility = 'visible';
    window.onclick = function (event) {
      if (event.target == modal_zoom_img) {
        modal_zoom_img.style.visibility = "hidden";
      }
  }
  })
}
if (second) {
  second.addEventListener('click' , ()=>{
    modal_zoom_img2.style.visibility = 'visible';
    window.onclick = function (event) {
      if (event.target == modal_zoom_img2) {
        modal_zoom_img2.style.visibility = "hidden";
      }
  }
  })
}
if (third) {
  third.addEventListener('click' , ()=>{
    modal_zoom_img3.style.visibility = 'visible';
    window.onclick = function (event) {
      if (event.target == modal_zoom_img3) {
        modal_zoom_img3.style.visibility = "hidden";
      }
  }
  })
}
if (fourth) {
  fourth.addEventListener('click' , ()=>{
    modal_zoom_img4.style.visibility = 'visible';
    window.onclick = function (event) {
      if (event.target == modal_zoom_img4) {
        modal_zoom_img4.style.visibility = "hidden";
      }
  }
  })
}
if (fifth) {
  fifth.addEventListener('click' , ()=>{
    modal_zoom_img5.style.visibility = 'visible';
    window.onclick = function (event) {
      if (event.target == modal_zoom_img5) {
        modal_zoom_img5.style.visibility = "hidden";
      }
  }
  })
}


// add to cart

// const cart_add_hover = document.querySelectorAll('#cart_add_hover');
// const hover_cart = document.querySelector('.hover_cart');
// if (cart_add_hover) {
//   for (const but of cart_add_hover)
//     but.addEventListener('click', e => {
//       var parent = e.target.parentNode.parentNode
//       console.log(parent);
//       var clone = parent.cloneNode(true)
//       hover_cart.appendChild(clone)
//     })
// }

// const add_count = document.querySelector('#add_count');
// var count = 0;
// if (cart_add_hover) {
//   for (let index = 0; index < cart_add_hover.length; index++) {
//     cart_add_hover[index].addEventListener('click', () => {
//       // modal_side.innerHTML += `<i class="bi bi-trash" onclick = "del(this)" ></i>`
//       add_count.innerText = count++
//     })
//   }
// }
