"use strict"

let films = [
    // Id, Title, Favorite, Watch date, Rating (0-5)
    [1, "Pulp Fiction", true, "10-03-2024", 5],
    [2, "21 Grammi", true, "17-03-2024", 3],
    [3, "Star Wars", false, "15-03-2024", 1],
    [4, "Matrix", false, "01-01-2023", 4],
    [5, "Shrek", false, "21-03-2024", 2],
    [6, "Kill Bill Vol. 1", true, "22-04-2024", 5],
    [7, "Inception", true, "18-04-2024", 5]
];


let tBody = document.getElementsByTagName("tbody")[0];
const modal = new bootstrap.Modal("#modal-count-films")
const alertLogin = document.getElementById("alert-login")

addEventListener();
visualizza();

function addEventListener(){
    let btnAdd = document.getElementById("btn-add");
    btnAdd.addEventListener("click", AddNewFilm)
    btnClear.addEventListener("click", puliscilista)
    btnReload.addEventListener("click", function(){
        window.location.reload()
        //window.location.href = "./index.html"
    })
    btnCount.addEventListener("click", contaFilm)
    let btnLogin = document.getElementById("btn-login");
    btnLogin.addEventListener("click", visualizzaLogin)
    const btnLoginClose = document.getElementsByClassName("btn-close")[1]
    btnLoginClose.addEventListener("click", function(){
        alertLogin.classList.add("d-none")
    })
}

function puliscilista(){
    films = []
    visualizza()
}


function visualizza(){
    tBody.innerHTML = ""
    for (const film of films) {
    let row = document.createElement("tr");
    tBody.appendChild(row);
    for (let i = 0; i< film.length; i++) {
        const field = film[i]
        let cell = document.createElement("td")
        row.appendChild(cell)
        if(i == 2){
            //è il campo preferito
            createPreferitoInnerHTML(cell, field)
        }else if(i == 4){
            // è il campo rating
            createratingInnerHTML(cell, field)
        }else{
            //altro campo lo tratto come stringa
            cell.innerHTML = field
        }
    }
}
}

function createPreferitoInnerHTML(cell, preferitovalue){
    let check = document.createElement("input");
    check.type = "checkbox";
    check.disabled = true
    check.checked = preferitovalue;
    cell.appendChild(check);
}

function createratingInnerHTML(cell, ratingvalue){
    for (let i = 0; i < 5; i++) {
        let star = document.createElement("i")
        if(i < ratingvalue){
            star.classList.add("bi", "bi-star-fill");
            
        }else{
            star.classList.add("bi", "bi-star");
        }
        cell.appendChild(star);
    }
}

function AddNewFilm(){
    let id = films.length + 1;
    let Title = prompt("inserire il titolo del nuovo film")
    let favorite = random(0,2)
    if(favorite == 0)
        favorite == false
    else
        favorite == true
    let today = (new Date()).toLocaleDateString().replaceAll("/", "-")
    let rating = random(1,6)

    let film = []
    film.push(id)
    film.push(Title)
    film.push(favorite)
    film.push(today)
    film.push(rating)

    films.push(film)

    visualizza()

}

function contaFilm(){
    const span = document.getElementById("span-n-films")
    span.textContent = films.length
    modal.show();
}

function visualizzaLogin(){
    alertLogin.classList.remove("d-none")
    setTimeout(function(){
        alertLogin.classList.add("d-none")
    }, 3000)
}

function random(min, max){
    return (Math.floor((max - min)*Math.random())) + min
}