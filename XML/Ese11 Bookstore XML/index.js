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
loadBooks()

function loadBooks(params){
    tBody.innerHTML = ""
    for (const book of xmlroot.children) {
        readFields(book)
    }
}

function readFields(book){
    id = book.getElementsByTagName("id")[0].textContent
    titolo = book.querySelector("title").textContent
    categoria = book.getAttribute("category") //in xml si possono usare solo attributi statici
    lingua = book.querySelector("title").getAttribute("lang")
    autori = ""
    for (const author of book.getElementsByTagName("author")) {
        autori += author.textContent + " - "
    }
    autori = autori.substring(0, autori.length - 3)
    anno = book.getElementsByTagName("year")[0]?.textContent
    prezzo = book.querySelector("price")?.textContent
    console.log(id, titolo, categoria, lingua, autori, anno , prezzo)

}






