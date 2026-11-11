"use strict";

const table = document.getElementsByTagName("table")[0]	
const tbody = table.querySelector("tbody")

const gender = document.querySelector(".gender")
const lstGender = gender.querySelector("select")

const btnInserisci = document.getElementsByClassName(".inserisci")[0]

//avvio
let watches = JSON.parse(datiIniziali)
creaTabella()

function creaTabella(){
    tbody.innerHTML = ""
    for (const item of watches) {
        const gender = item.gender
        const models = item.models
        for (const model of models) {
            const code = model.code
            const price = model.price
            const watches = model.watches
            for(const watch of watches){
                const color = watch.color
                const img = watch.image
                visualizza(gender, code, price, color, img)
            }
        }
    } 
}

function visualizza(...items){
    const tr = document.createElement("tr")
    tbody.append(tr)

    items.forEach( (item, i) => {
        const td = document.createElement("td")
        tr.append(td)
        if(i != 4)
            td.innerHTML = item
        else{
            const img = document.createElement("img")
            img.src = "./img/" + item
            td.append(img)
        }
    })
}