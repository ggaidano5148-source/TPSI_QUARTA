"use strict"

const navbarContent = document.getElementById("navbarContent");
const tbody = document.getElementsByTagName("tbody")[0];
const alertLogin = document.getElementById("alert-login");
const btnLoginClose = alertLogin.querySelector("button");
const vociMenu = navbarContent.querySelectorAll("a");
let lastSelected = vociMenu[0]
const detailsModal = new bootstrap.Modal("#modal-details")
const card = document.querySelector("#modal-details .card")


visualizzaLibri()
gestisciMenu()

function visualizzaLibri(genre){
    for (let i = 0; i < biblioteca.length; i++) {
        const libro = biblioteca[i];

        if(!genre || genre == "All" || genre == libro[4]){

            const tr = document.createElement("tr")
            tbody.append(tr)
    
            const tdId = document.createElement("td")
            tdId.textContent = libro[0]
            const tdTitolo = document.createElement("td")
            tdTitolo.textContent = libro[1]
            const tdAutore = document.createElement("td")
            tdAutore.textContent = libro[2]
            const tdGenere = document.createElement("td")
            tdGenere.textContent = libro[4]
            const tdCopieVendute = document.createElement("td")
            tdCopieVendute.textContent = libro[6]
            const tdSearch = document.createElement("td")
            tdSearch.innerHTML = '<i class="bi bi-search"></i>'
            tdSearch.addEventListener("click", function(){
                visualizzaDettagli(libro)
            })
            const tdTrash = document.createElement("td")
            tdTrash.innerHTML = '<i class="bi bi-trash"></i>'
    
            tr.append(tdId, tdTitolo, tdAutore, tdGenere, tdCopieVendute, tdSearch, tdTrash)
            tdTrash.addEventListener("click", function(){
                eliminaLibro(libro)
            })
        }
    }
}

btnLogin.addEventListener("click", function(){
    alertLogin.classList.remove("d-none");
})

btnLoginClose.addEventListener("click", function(){
    alertLogin.classList.add("d-none")
})

function gestisciMenu(){
    for(const item of vociMenu){
        item.addEventListener("click", function(){
            lastSelected.classList.remove("active")
            this.classList.add("active") //e.target
            lastSelected = this
            visualizzaLibri(this.textContent)
        })
    }
}

function visualizzaDettagli(libro){
    detailsModal.show()
    const h2 = document.createElement("h2")
    card.classList.add("card-title", "text-center", "mb-3")
    h2.textContent = libro[2]
    card.append(h2)
}

function eliminaLibro(id){
    for (const item of libri) {
        if(libro.id == id)
    }
}