"use strict"

let currentPage = 0

const opts = document.querySelectorAll("#optWrapper input")
const table = document.querySelector(".list")
const tbody = table.querySelector("tbody")
const pageBtns = document.querySelectorAll("#pageButtons input")
const nPag = document.getElementById("nPagina")
const details = document.getElementById("details")


// lettura json
const people = loadData()
displayData()

/*****************************/

function loadData(){
    let peopleString = localStorage.getItem("people")
    if(!peopleString)
        peopleString = peopleStorage
    //trasformo da string a object
    return JSON.parse(peopleString)
}

function displayData(){
    tbody.innerHTML = ""
    //questo non è fattibile perche queryselector deve essere applicato ad un singolo elemento del dom non ad un vettore
    const gender = opts.querySelector(":checked").value
    console.log(gender)
    for(let i = 0; i < 6; i++){
        let person = people[i]
    }
}

