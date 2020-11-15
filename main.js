var number = 1
start()
function start(){
	while(localStorage.getItem(`save${number}`) != undefined){
		var newElement = `<h3 class="elementSave">${number} - ${localStorage.getItem(`save${number}`)}</h3>`
		document.body.innerHTML += newElement
		number++
	}

}
function remove(){
	console.log("function remove")
	number = 1
	while(localStorage.getItem(`save${number}`) != undefined){
		localStorage.removeItem(`save${number}`)
		number++
	}
	window.location.reload()
}
function save(){
	number = 1
	if (document.getElementById("textInput").value != ""){
		while(localStorage.getItem(`save${number}`) != undefined){
			number++
		}
		if(localStorage.getItem(`save${number}`) == undefined){
			localStorage.setItem(`save${number}`, `${document.getElementById("textInput").value}`)
			document.getElementById("textInput").value = ""
		}
		start()
	} else{
		alert("Não salvo. Motivo: campo vazio")
	}
}