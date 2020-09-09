const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", function() {
    navbar.classList.toggle("change");
});

const button = document.querySelector("#button");
const content = document.querySelector("#content");

button.addEventListener("click", function() {
    sendApiRequest();
});

async function sendApiRequest() {
    const APP_ID = "d8ad7dd6";
    const APP_KEY = "922b9eb549cc65ebc3d15090de2db7c3";
    const response = await fetch(`https://api.edamam.com/search?q=pasta&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    useApiData(data);
}

function useApiData(data) {
    content.innerHTML = "";
    data.hits.map(function(item) {
        content.innerHTML += `
        <div class="col-md">
            <div class="card border-0" style="width: 18rem;">
                <img class="card-img-top" src="${item.recipe.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${item.recipe.label}</h5>
                    <p class="card-text">${item.recipe.source}</p>
                    <a href="${item.recipe.url}" target="_blank" class="btn btn-dark">Check Out!</a>
                </div>
            </div>
        </div>
    `;
    });
}

//animation
const search = document.querySelector("#search");
const logo = document.querySelector("#logo");

const tl = new TimelineMax();

tl.fromTo(search, 2, { y: "-1000%" }, { y: "0%", ease: Power2.easeInOut })
    .fromTo(logo, 2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-= 2")
    .fromTo(menuIcon, 2, { x: "1000%" }, { x: "0%", ease: Power2.easeInOut }, "-= 2");