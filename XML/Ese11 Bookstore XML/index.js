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



//avvio 
btnListView.classList.add("active");
let bookStore = localStorage.getItem("bookstore")
if(!bookStore)
    bookStore = datiIniziali

console.log(bookStore)

// parsing
const parser = new DOMParser()
const xmlDoc = parser.parseFromString(bookStore, "text/xml")





