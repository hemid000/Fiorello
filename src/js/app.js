const bi_search = document.querySelector(".bi-search");
const search = document.querySelector(".search");
const img_right =  document.getElementsByClassName('img_rightside');

if (bi_search) {
    bi_search.addEventListener("click", (e) => {
        search.classList.toggle("active");

    })
}

var data_img = [
    {
        imgUrl: 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background.jpg'
    }
    ,
    {
        imgUrl: 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-2.jpg'
    }
    ,
    {
        imgUrl: 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-3.jpg'
    }
]


//    var map  = data_img.map(el =>
//     `
//      <img src="${el.imgUrl}" alt="">
//      `
// )
   var map  = data_img.map((el)=>{
    `
    <img src="${el.imgUrl}" alt="">

    `
   })

img_right.innerHTML += map;



