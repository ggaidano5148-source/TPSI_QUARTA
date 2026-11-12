"use strict";


let scuderie
const tbody = document.getElementsByTagName("tbody")[0]

loadData()
//console.log(scuderie)

caricaListBox()
caricaNazione()
caricaTabella()

function loadData(){
    let aus = localStorage.getItem("F1")
    if(!aus){
        aus = database
    }
    scuderie = JSON.parse(aus)
}

function caricaListBox(){
    const keys = Object.keys(scuderie)
    keys.sort()
    for (const key of keys) {
        let opt = document.createElement("option")
        opt.textContent = key
        lstScuderie.append(opt)
    }
    lstScuderie.selectedIndex = -1
    lstScuderie.addEventListener("change", function(){
        for (const chk of divNazioni.querySelectorAll("input[type=checkbox]")) {
            chk.checked = false
        }
        caricaTabella()
    } )
}

function caricaNazione(){
    let nazioni = new Set()
    for (const key in scuderie) {
        const scuderia = scuderie[key];
        for (const pilota of scuderia.piloti) {
            nazioni.add(pilota.nazione)
        }
    }
    let nazioniOrdinate =  Array.from(nazioni).sort()
    nazioniOrdinate.forEach(function(nazione) {
        let input = document.createElement("input")
        input.type= "checkbox"
        input.addEventListener("change", function(){
            lstScuderie.selectedIndex = -1
            caricaTabella()
        })
        divNazioni.append(input)
        let span = document.createElement("span")
        span.textContent = nazione
        divNazioni.append(span)
        divNazioni.append(document.createElement("br"))
    });
}

function caricaTabella(){
    tbody.innerHTML = ""
    let scuderiaSelezionata = lstScuderie.value
    let nazioniSelezionateChks = divNazioni.querySelectorAll("input[type=checkbox]:checked")
    let nazioniSelezionate = nazioniSelezionateChks.map(function(chk){return chk.value})
    for (const key in scuderie) {
        if(!scuderiaSelezionata || scuderiaSelezionata == key){
            const item = scuderie[key]
            for (const pilota of item.piloti) {
                let num = pilota.numero
                let nome = pilota.nome
                let nazione = pilota.nazione
                let scuderia = key
                creaRigaTabella(num, nome, nazione, scuderia)
            }
        }
    }
}

function creaRigaTabella(... params){
    let tr = document.createElement("tr")
    tbody.append(tr)    
    for (let i = 0; i < params.length; i++) {
        let td = document.createElement("td")
        if(i == 1){
            let span = document.createElement("span")
            span.textContent = params[i]
            td.append(span)
        }
        else{
            td.textContent = params[i]
        }
        tr.append(td)
    }
}