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
  function ChangeImg () {
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

// if (third) {
//     setTimeout(() => {
//         third.style.display = "block";
//     }, 4000);
//     setTimeout(() => {
//         third.style.display = "none";
//     }, 6000);

// }
