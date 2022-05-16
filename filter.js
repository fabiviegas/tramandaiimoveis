// FILTROS
const CARDS = document.getElementsByClassName("card");
const FILTROS = document.getElementById("category");
let BAG = [];

// Esconder os cards
function hideCards() {
    for (i = 0; i < CARDS.length; i++) {
        CARDS[i].classList.remove("show");
        CARDS[i].classList.add("hide");
        console.log(CARDS[i]);
    }
}

// Mostrar todos os cards
function showCards() {
    for (i = 0; i < CARDS.length; i++) {
        CARDS[i].classList.remove("hide");
        CARDS[i].classList.add("show");
        console.log(CARDS[i]);
    }
}

// filtrar pela classe
function filterCategory() {
    let classOption = document.getElementById("category").value;
    for (i = 0; i < CARDS.length; i++) {
        let a = CARDS[i].classList.contains(categoryOption);
        if (a === true) {
            CARDS[i].classList.remove("hide");
            CARDS[i].classList.add("show");
        }
    }
}

// filtrar pelo Tier
function filterCity() {
    let tierOption = document.getElementById("city").value;
    for (i = 0; i < CARDS.length; i++) {
        let b = CARDS[i].classList.contains(cityOption);
        if (a === true) {
            CARDS[i].classList.remove("hide");
            CARDS[i].classList.add("show");
        }
    }    
}

// filtrar pela classe e tier
function filterCategoryCity() {
    let categoryOption = document.getElementById("category").value;
    let cityOption = document.getElementById("city").value;
    for (i = 0; i < CARDS.length; i++) {
        let a = CARDS[i].classList.contains(categoryOption);
        let b = CARDS[i].classList.contains(cityOption);
        if (a === true & b === true) {
            CARDS[i].classList.remove("hide");
            CARDS[i].classList.add("show");
        }
    }
}



// ACESSAR FILTRO
function filterCards() {
    filterCategoryCity();
}

const SUBMIT = document.querySelector('#filterButton');
SUBMIT.addEventListener('click', () => {
    hideCards();
    filterCards();
});


