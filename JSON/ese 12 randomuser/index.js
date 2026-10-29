"use strict"
// table
const opts = document.querySelectorAll("#optWrapper input")
const table = document.querySelector(".list")
const tbody = table.querySelector("tbody")
// details
const details = document.getElementById("details")
const navBtns = document.querySelectorAll("#navButtons input")
const navLabel = document.getElementById("navLabel")
// utility buttons
const utilityBtns = document.querySelectorAll("#utilityButtons input")
// addNew
const modal = document.getElementById('addNewModal');


// Events
opts[0].addEventListener("click", displayData)
opts[1].addEventListener("click", displayData)

navBtns.forEach(function(button){
	button.addEventListener("click", naviga)
})

//data filtrati
let fileredData
// Avvio
let currentIndex = 0
const people = loadData();
displayData()




function loadData(){
	let peopleString = localStorage.getItem("people");
	if (!peopleString) 
		peopleString = peopleStorage
	return JSON.parse(peopleString)
}


function displayData() {
	tbody.innerHTML=""
	
	// const gender = opts.querySelector(":checked").value - NOK
	const gender = optWrapper.querySelector(":checked").value
	console.log(people, gender)

	getFilteredData(gender)

	fileredData.forEach(function (person, index){
			const tr = document.createElement("tr")
			tbody.append(tr)

			let td = document.createElement("td")
			td.textContent = getName(person.name)
			tr.append(td)

			td = document.createElement("td")
			td.textContent = person.location.city
			tr.append(td)

			td = document.createElement("td")
			td.textContent =person.location.state
			tr.append(td)

			td = document.createElement("td")
			td.textContent =person.nat
			tr.append(td)

			td = document.createElement("td")
			td.classList.add("icon", "lens")
			td.addEventListener("click", function(){
				currentIndex = index
				showDetail(person)
			})
			tr.append(td)

			td = document.createElement("td")
			td.classList.add("icon", "trash")
			td.addEventListener("click", function(){
				removePerson(person)
			})
			tr.append(td)
	});
	detailsContainer.style.display = "none"
}

function getName(personName){
	return `${personName.first} ${personName.last}`
}

function showDetail(person){
	detailsContainer.style.display = ""
	details.innerHTML = ""

	let p = document.createElement("p")
	p.textContent = person.email
	details.append(p)

	let img = document.createElement("img")
	img.src = person.picture.large
	details.append(img)

	p = document.createElement("p")
	p.textContent = person.cell
	details.append(p)

	navLabel.textContent = `${currentIndex + 1}/${fileredData.length}`
}


function getFilteredData(gender){
	fileredData = []
	people.forEach(function(person){
		if(person.gender == gender){
			fileredData.push(person)
		}
	})
	return fileredData
}

function naviga(){
	switch(this.value){
		case "Primo":
			currentIndex = 0
			break;
		case "Indietro":
			if(currentIndex > 0){
				currentIndex--
			}
			break;
		case "Avanti":
			if(currentIndex < fileredData.length - 1){
				currentIndex++
			}
			break;
		case "Ultimo":
			currentIndex = 19
			break;
		default:
			break;
	}
	showDetail(fileredData[currentIndex])

}

function removePerson(person){
	
}