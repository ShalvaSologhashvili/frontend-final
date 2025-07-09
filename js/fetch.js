let request = new XMLHttpRequest();
request.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");

request.addEventListener("load", function () {
let responseJs = JSON.parse(this.responseText);
let drinks = responseJs.drinks;

let container = document.getElementById("api");

for (let i = 0; i < drinks.length; i++) {
    let card = document.createElement("div");
    card.className = "card";

    let icon = document.createElement("div");
    icon.className = "card-icon";
    icon.textContent = "🍸";

    let name = document.createElement("div");
    name.className = "drink-name";
    name.textContent = drinks[i].strDrink;

    let instructions = document.createElement("div");
    instructions.className = "instructions";
    instructions.textContent = drinks[i].strInstructions;

    card.appendChild(icon);
    card.appendChild(name);
    card.appendChild(instructions);

    container.appendChild(card);
}
});

request.send();

const scrollBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});