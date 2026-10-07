'use strict'

let wrapper = document.querySelector("#wrapper");
const wrapper_li = wrapper.querySelectorAll("li");
let btns = document.querySelectorAll("#buttons input[type=button]");



// funzione di visualizzazione richiamata dall'html
function evidenzia(selectorString){
    for(const li of wrapper_li){
        li.style.backgroundColor = ""
    }
	let elements = wrapper.querySelectorAll(selectorString)
    //non si possono applicare effetti ad una intera nodelist
    //element.style.backgroungColor = "yellow"
    for (const element of elements) {
        element.style.backgroundColor = "yellow"
    }
}

btns[0].addEventListener("click", function(){
    alert("gli elementi sono", wrapper_li.length)
});

btns[1].addEventListener("click", function(){
    let msg = ""
    //for(const li of wrapper_li){
    wrapper_li.forEach(function(li, i){
        msg += li.textContent + "\n"
    })
    alert(msg)
});

btns[2].addEventListener("click", function(){
    const li_pari = wrapper.querySelectorAll("li:nth-of-type(even)")
    li_pari.forEach(function(item,i){
        item.style.backgroundColor = "yellow"
    })
})


//fare da soli
btns[3].addEventListener("click", function(){
    let colore = 50
    wrapper_li.forEach(function(item, i){
        item.style.backgroundColor = ""
        if(item.matches("li:nth-of-type(odd)"))
        {
            item.style.backgroundColor = `rgb(0, ${colore} , 0)`
            colore += 50
        }
    })
})


// GESTIONE PULSANTI
