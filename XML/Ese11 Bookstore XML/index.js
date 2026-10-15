'use strict'

const listView = document.getElementById("list-view");
const divNbooks = listView.querySelector(".nBooks")
const tBody = listView.querySelector("tbody");

const detailsView = document.getElementById("details-view");
detailsView.style.display="none"
const details = detailsView.querySelector(".details")
const pageLabel = detailsView.querySelector("span")

const addView = document.getElementById("add-view");
addView.style.display="none"
const newBook = addView.querySelector(".details")
const headerButtons = document.getElementsByClassName("headerBtn");
const btnListView = headerButtons[0];
const btnDetailsView = headerButtons[1];
const btnAddView = headerButtons[2];
const btnSave = headerButtons[3];

let id, titolo, categoria, lingua, autori, anno , prezzo 
let detailIndex = 0


//avvio 
btnListView.classList.add("active");
let bookStore = localStorage.getItem("bookstore")
if(!bookStore)
    bookStore = datiIniziali
console.log(bookStore)

// parsing
const parser = new DOMParser() 
const xmlDoc = parser.parseFromString(bookStore, "text/xml")

// prendiamo xmlroot
const xmlroot = xmlDoc.firstElementChild

// gestiamo i pulsanti della toolbar
btnListView.addEventListener("click", showList)
btnDetailsView.addEventListener("click", showDetails)
btnAddView.addEventListener("click", showAdd)

// carichiamo i libri
showList()

function loadBooks(params){
    tBody.innerHTML = ""
    for (const book of xmlroot.children) {
        readFields(book)
        let tr = document.createElement("tr")
        tBody.appendChild(tr)

        let td = document.createElement("td")
        td.textContent = id
        tr.appendChild(td)

        td = document.createElement("td")
        td.textContent = titolo
        tr.appendChild(td)

        td = document.createElement("td")
        td.textContent = categoria
        tr.appendChild(td)

        td = document.createElement("td")
        td.textContent = lingua
        tr.appendChild(td)

        td = document.createElement("td")
        td.textContent = autori
        tr.appendChild(td)

        td = document.createElement("td")
        td.textContent = anno
        tr.appendChild(td)

        td = document.createElement("td")
        td.textContent = prezzo
        tr.appendChild(td)

        td = document.createElement("td")
        let btn = document.createElement("button")
        btn.textContent = "delete"
        btn.style.borderRadius = "7px"
        btn.style.backgroundColor = "rgb(0, 85, 238)"
        btn.style.color = "white"
        td.appendChild(btn)
        tr.appendChild(td)
    }
}

function loadDetails(params){
    details.innerHTML = ""
    if(xmlroot.children.length > 0){
        const book = xmlroot.children[detailIndex]
        readFields(book)
        createDetailLine("id", id)
        createDetailLine("titolo", titolo)
        createDetailLine("categoria", categoria)
        createDetailLine("lingua", lingua)
        createDetailLine("autori", autori)
        createDetailLine("anno", anno)
        createDetailLine("prezzo", prezzo) 
    }
}

function createDetailLine(key, value){
    let lbl = document.createElement("label")
    lbl.textContent = key
}

function readFields(book){
    id = book.getElementsByTagName("id")[0].textContent
    titolo = book.querySelector("title").textContent
    categoria = book.getAttribute("category") //in xml si possono usare solo attributi statici
    lingua = book.querySelector("title").getAttribute("lang") || ""
    autori = ""
    for (const author of book.getElementsByTagName("author")) {
        autori += author.textContent + " - "
    }
    autori = autori.substring(0, autori.length - 3)
    anno = book.getElementsByTagName("year")[0]?.textContent || ""
    prezzo = book.querySelector("price")?.textContent || ""
    console.log(id, titolo, categoria, lingua, autori, anno , prezzo)
}

function showDetails(){
    reset()
    detailsView.style.display = ""
    btnDetailsView.classList.add("active")
    loadDetails()
}

function showList(){
    reset()
    listView.style.display = ""
    btnListView.classList.add("active")
    loadBooks()
}

function showAdd(){
    reset()
    addView.style.display = ""
    btnAddView.classList.add("active")
}

function reset(params){
    for (const div of container.children) {
        div.style.display = "none"
    }

    for (const btn of headerButtons) {
        btn.classList.remove("active")
    }
}






