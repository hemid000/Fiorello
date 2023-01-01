const bi_search = document.querySelector(".bi-search");
const search = document.querySelector(".search");



if (bi_search) {
    bi_search.addEventListener("click", (e) => {
        search.classList.toggle("active");

    })
}


const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');


if (first) {


      


    setInterval(() => {
       
        first.style.opacity = "0";
    }, 2000);
    
}  

if (second) {
   setInterval(() => {
    second.style.opacity = "1";
   }, 2000);
    setInterval(() => {
        second.style.opacity = "0";
    }, 4000);
    
}
// if (third) {
//     setTimeout(() => {
//         third.style.display = "block";
//     }, 4000);
//     setTimeout(() => {
//         third.style.display = "none";
//     }, 6000);
    
// }




