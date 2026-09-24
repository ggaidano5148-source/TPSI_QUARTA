"use strict"

const content = document.getElementById("content") // non indispensabile
const genderElements = document.querySelectorAll(".dropdown-menu li");

const playModal = document.getElementById("play-modal")
const span = document.getElementById("song-title-modal")

for (let genderElement of genderElements) {
	genderElement.addEventListener("click", genderClick)
}

const iFriends = document.getElementById("i-friends");
iFriends.addEventListener("click", showAlert);
const alertFriends = document.getElementById("alert-friends");

const iSearch = document.getElementById("i-search");
iSearch.addEventListener("click", toggleSearch);
const txtSearch = document.getElementById("txt-search");

loadSongs();

function loadSongs(genre){
	content.innerHTML = ""
	const h3 = document.createElement("h3")
	content.append(h3)
	let cont = 0
	for (let song of songs) {
		if(genre == undefined || genre == "all" || song[5] == genre){
			cont++
		// creo la riga
		const row = document.createElement("div")
		row.classList.add("row", "border", "rounded", "p-2", "m-2")
		content.append(row)
		// creo la colonna
		const col1 = document.createElement("div")
		col1.classList.add("col-md-4", "col-xl-3")
		const col2 = document.createElement("div")
		col2.classList.add("col-md-8", "col-xl-9")
		row.append(col1, col2)
		// riempi col1
		const img = document.createElement("img")
		img.classList.add("w-100", "rounded")
		img.src = "img/cover" + song[0] + ".jpg"
		col1.append(img)
		// riempi col2
		const h2 = document.createElement("h2")
		h2.textContent = song[0] + "-" + song[1]
		col2.append(h2)
		let h5 = document.createElement("h5")
		h5.textContent = "Artist: " + song[2]
		col2.append(h5)
		h5 = document.createElement("h5")
		h5.textContent = "Album: " + song[3]
		col2.append(h5)
		h5 = document.createElement("h5")
		const min = Math.floor(song[4] / 60)
		const sec = song[4] % 60
		h5.textContent = "Duration: " + min + "m " + sec + "s"
		col2.append(h5)
		h5 = document.createElement("h5")
		h5.textContent = "Stream: " + song[6].toLocaleString() // separa le cifre a centinatia 1.000.000 cosi
		col2.append(h5)
		const button = document.createElement("btn")
		button.classList.add("btn", "btn-secondary")
		button.textContent = "play"
		BigInt.addEventListener("click", function(){
			
		})
		col2.append(button)
		}
	}
	h3.textContent = "numero di canzoni: " + cont
}

function genderClick(e){
	//console.log("gender clicked " + e.target.textContent) // o si usa e o si usa this
	//console.log("gender clicked " + this.target.textContent) // o si usa e o si usa this
	for (let genderElement of genderElements) {
		genderElement.firstElementChild.classList.remove("active")
	}
	this.children[0].classList.add("active") // firstelementchild e children[0] sono equivalenti
	loadSongs(this.textContent)
}

function showAlert(){

}

function toggleSearch(){
	
}

