
// Armazenar as informações da pesquisa

function storageInfo() {
    sessionStorage.categoryh = document.getElementById("categoryH").value;
    sessionStorage.cityh = document.getElementById("cityH").value;
    sessionStorage.districth = document.getElementById("districtH").value;
    
}

// Redirecionando para página de pesquisa

function redirect() {
    window.location.assign("search-page.html");
}


// ACESSAR FILTRO
const SUBMITH = document.querySelector('#filterHome');
SUBMITH.addEventListener('click', () => {
    storageInfo();
    redirect();        
});





