"use strict"

const content = document.getElementById("content")

const alert_search = document.getElementById("alert-search")
const btnSearch = document.getElementById("btn-search");
btnSearch.addEventListener("click", Show_Alert);
const modal = new bootstrap.Modal("#buy-modal")
const DropdownItem = document.querySelectorAll("dropdown-item");

for (const item of DropdownItem) {
    item.addEventListener("click", dropdownClick)
}

LoadData()

function LoadData() {
    switch(this.textContent){ 
    case "PC": 
        loadProducts(pc, pc_headers, "pc"); 
        break; 
    case "Telefoni": 
        loadProducts(telefoni, telefoni_headers, "telefoni"); 
        break; 
    case "Tv": 
        loadProducts(tv, tv_headers, "tv"); 
        break; 
    case "Audio Player": 
        loadProducts(player, player_headers, "player"); 
        break; 
}
}

function Show_Alert() {
    alert_search.classList.remove("d-none")
    setTimeout(function () {
        alert_search.classList.add("d-none")
    }, 3000);
}

function Loadproduct(Prodotto, CategorieProdotto){
    content.innerHTML = ""
    const h3 = document.createElement("h3")
    h3.textContent = `Numero di Prodotti: ${Prodotto.length}`
    content.append(h3)

    const row = document.createElement("div")
    row.classList.add("row")
    content.append(row)

    /*for (const prodotti of prodotto) {
        const col = document.createElement("div")
        col.classList.add("col-md-4")
        row.append(col)

        const card_shadow = document.createElement("div")
        card_shadow.classList.add("card", "shadow-lg", "border-0", "rounded-3")
        col.append(card_shadow)

        const img = document.createElement("img")
        img.classList.add("card-img-top")
        img.src = `img/pc/img${pc[0]}.jpg`
        card_shadow.append(img)

        const card = document.createElement("div")
        card.classList.add("card-body")
        card_shadow.append(card)

        const h5 = document.createElement("h5")
        h5.classList.add("card-title")
        h5.textContent = pc[1]
        card.append(h5)

        const p = document.createElement("p")
        p.classList.add("card-text")
        p.innerHTML = `${pc_header[2]}: ${pc[2]}
        <br> ${pc_header[3]}: ${pc[3]}
        <br> ${pc_header[4]}: ${pc[4]}
        <br> ${pc_header[5]}: ${pc[5]}
        <br> ${pc_header[6]}: ${pc[6]}`
        card.append(p)

        const btn = document.createElement("a")
        btn.classList.add("btn", "btn-secondary")
        btn.textContent = "Compra"
        btn.addEventListener("click", function () {
            modal.show()
        })
        card.append(btn)
    }*/
}