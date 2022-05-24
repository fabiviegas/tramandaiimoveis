// FILTROS
const CARDS = document.getElementsByClassName("card");
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

// filtrar 
function filterCards() {
    let categoryOption = document.getElementById("category").value;
    let cityOption = document.getElementById("city").value;
    let districtOption = document.getElementById("district").value;
    let goalOption = document.getElementById("goal").value;
    let bedroomOption = document.getElementById("bedroom").value;
    let bathroomOption = document.getElementById("bathroom").value;
    let garageOption = document.getElementById("garage").value;
    let suiteOption = document.getElementById("suite").value;
    for (i = 0; i < CARDS.length; i++) {
        let a = CARDS[i].classList.contains(categoryOption);
        let b = CARDS[i].classList.contains(cityOption);
        let c = CARDS[i].classList.contains(districtOption);
        let d = CARDS[i].classList.contains(goalOption);
        let e = CARDS[i].classList.contains(bedroomOption);
        let f = CARDS[i].classList.contains(bathroomOption);
        let g = CARDS[i].classList.contains(garageOption);
        let h = CARDS[i].classList.contains(suiteOption);
        if (a === true & b === true & c === true & d === true & e === true & f === true & g === true & h === true) {
            CARDS[i].classList.remove("hide");
            CARDS[i].classList.add("show");
        }
    }
}

// ACESSAR FILTRO

const SUBMIT = document.querySelector('#filterButton');
SUBMIT.addEventListener('click', () => {
    hideCards();
    filterCards();
});

// FIRST LOAD
if(sessionStorage.categoryh != undefined) {
    document.getElementById("category").value = sessionStorage.categoryh;
}

if(sessionStorage.cityh != undefined) {
    document.getElementById("city").value = sessionStorage.cityh;
}

if(sessionStorage.districth != undefined) {
    document.getElementById("district").value = sessionStorage.districth;
}

hideCards();
filterCards();


