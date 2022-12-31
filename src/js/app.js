const bi_search = document.querySelector(".bi-search");
const search = document.querySelector(".search");


if (bi_search) {
    bi_search.addEventListener("click" ,(e)=>{
        search.classList.toggle("active");

    })
}