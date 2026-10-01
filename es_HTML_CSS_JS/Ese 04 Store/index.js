"use strict"

const content = document.getElementById("content")


const alert_search = document.getElementById("alert-search")
const btnSearch = document.getElementById("btn-search");
btnSearch.addEventListener("click", Show_Alert);
const modal = new bootstrap.Modal("#buy-modal")
const DropdownItem = document.getElementsByClassName("dropdown-item");

for (const item of DropdownItem) {
    item.addEventListener("click", dropdownClick)
}


function dropdownClick(){
    for (const item of DropdownItem) {
        item.classList.remove("active")
    }
    this.classList.add("active")
    LoadData(this.textContent)
}

LoadData("PC")

function LoadData(category) {
    let products
    let ProductHeader
    let imgFolder
    switch(category){ 
    case "PC": 
        products = pc
        ProductHeader = pc_header
        imgFolder = "pc"
        break; 
    case "Telefoni": 
        products = telefoni
        ProductHeader = telefoni_header
        imgFolder = "telefoni"
        break; 
    case "Tv": 
        products = tv
        ProductHeader = tv_header
        imgFolder = "tv"
        break; 
    case "Audio Player": 
        products = player
        ProductHeader = player_header
        imgFolder = "player"
        break; 
    }
    Loadproduct(products, ProductHeader, imgFolder);
}

function Show_Alert() {
    alert_search.classList.remove("d-none")
    setTimeout(function () {
        alert_search.classList.add("d-none")
    }, 3000);
}


function Loadproduct(Prodotto, CategorieProdotto, cartella){
    content.innerHTML = ""
    const h3 = document.createElement("h3")
    h3.textContent = `Numero di Prodotti: ${Prodotto.length}`
    content.append(h3)

    const row = document.createElement("div")
    row.classList.add("row")
    content.append(row)

    for (const prodotti of Prodotto) {
        const col = document.createElement("div")
        col.classList.add("col-md-4")
        row.append(col)

        const card_shadow = document.createElement("div")
        card_shadow.classList.add("card", "shadow-lg", "border-0", "rounded-3")
        col.append(card_shadow)

        const img = document.createElement("img")
        img.classList.add("card-img-top")
        img.src = `img/${cartella}/img${prodotti[0]}.jpg`
        card_shadow.append(img)

        const card = document.createElement("div")
        card.classList.add("card-body")
        card_shadow.append(card)

        const h5 = document.createElement("h5")
        h5.classList.add("card-title")
        h5.textContent = prodotti[1]
        card.append(h5)

        const p = document.createElement("p")
        p.classList.add("card-text")
        p.innerHTML = `${CategorieProdotto[2]}: ${prodotti[2]}
        <br> ${CategorieProdotto[3]}: ${prodotti[3]}
        <br> ${CategorieProdotto[4]}: ${prodotti[4]}
        <br> ${CategorieProdotto[5]}: ${prodotti[5]}
        <br> ${CategorieProdotto[6]}: ${prodotti[6]}`
        card.append(p)

        const btn = document.createElement("a")
        btn.classList.add("btn", "btn-secondary")
        btn.textContent = "Compra"
        btn.addEventListener("click", function () {
            modal.show()
        })
        card.append(btn)
    }
}