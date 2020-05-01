var i=1;
var data1 = [];
function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}
function veriName(champ) {
    let regex =/^[A-Z]([a-z]){1,29}/;
    if (!regex.test(champ.value)) {
        surligne(champ, true);
        return false;
    } else {
        surligne(champ, false);
        return true;
        
    }
}
function veriAdresse(champ) {
    let regex =/^([0-9]{2})\s+Rue\s[A-Z][a-z]{2,}\s[A-Z][a-z]{2,},[0-9]{2,5}\s[A-Z][a-z]{3,},\w{3,}/;
    if (!regex.test(champ.value)) {
        surligne(champ, true);
        return false;
    } else {
        surligne(champ, false);
        return true;
        
    }
}
function verifForm(f)
{
   var firstOk = verifName(f.pseudo);
   var adresseOk = verifAdresse(f.adresse);
   var lastOk = veriName(f.last);
   
   if(firstOk && adresseOk && lastOk)
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}
function recuperationData(){
    let last = document.getElementById("last").value;
    let table = document.getElementById("table");
    let first = document.getElementById("first").value;
    let adresse = document.getElementById("adresse").value;
    data ={ lastName:last, firstName: first, add:adresse};
    data1[i-1]=data;
    return data1;
}
var j=0
function tableCreate(data1) {
    let table = document.getElementById("table");
    let elemTDi = document.createElement("TD");
    let elemTDf = document.createElement("TD");
    let elemTDl = document.createElement("TD");
    let elemTDa = document.createElement("TD");
    let elemTR = document.createElement("TR");
    let texti = document.createTextNode(i++);
    let textf = document.createTextNode(data1[j].firstName);
    let textl = document.createTextNode(data1[j].lastName);
    let texta = document.createTextNode(data1[j].add);
    elemTDi.appendChild(texti);
    elemTDf.appendChild(textf);
    elemTDl.appendChild(textl);
    elemTDa.appendChild(texta);
    elemTR.appendChild(elemTDi);
    elemTR.appendChild(elemTDf);
    elemTR.appendChild(elemTDl);
    elemTR.appendChild(elemTDa);
    table.appendChild(elemTR);
    j++;

}
function fonction(){
    tableCreate(recuperationData());
}
function sorting_ascendingly_on(arr, prop){
	
	let res =  arr.sort(function (a,b ){

		let property = prop;
		return  a[property] === b[property] ? 0 : a[property] > b[property] ? 1 : -1
	})
	return res
}
function  remove() {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}

function sorting_descendingly_on(arr, prop){
	
	let res =  arr.sort(function (a,b ){

		let property = prop;
		return  a[property] === b[property] ? 0 : a[property] > b[property] ? -1 : 1
	})
	return res
}

function asd() {
    let option = document.getElementById("option2").value;
    remove();
    let elemTDi = document.createElement("TH");
    let elemTDf = document.createElement("TH");
    let elemTDl = document.createElement("TH");
    let elemTDa = document.createElement("TH");
    let elemTR = document.createElement("TR");
    let texti = document.createTextNode("Id");
    let textf = document.createTextNode("First");
    let textl = document.createTextNode("Laste");
    let texta = document.createTextNode("Adresse");
    elemTDi.appendChild(texti);
    elemTDf.appendChild(textf);
    elemTDl.appendChild(textl);
    elemTDa.appendChild(texta);
    elemTR.appendChild(elemTDi);
    elemTR.appendChild(elemTDf);
    elemTR.appendChild(elemTDl);
    elemTR.appendChild(elemTDa);
    table.appendChild(elemTR);
    let az = sorting_ascendingly_on(data1,option);
    i=1;
    for (let index = 0; index < data1.length; index++) {
        j = index;
        tableCreate(az);
    }
    
}
function dsd() {
    let option = document.getElementById("option2").value;
    remove();
    let elemTDi = document.createElement("TH");
    let elemTDf = document.createElement("TH");
    let elemTDl = document.createElement("TH");
    let elemTDa = document.createElement("TH");
    let elemTR = document.createElement("TR");
    let texti = document.createTextNode("Id");
    let textf = document.createTextNode("First");
    let textl = document.createTextNode("Laste");
    let texta = document.createTextNode("Adresse");
    elemTDi.appendChild(texti);
    elemTDf.appendChild(textf);
    elemTDl.appendChild(textl);
    elemTDa.appendChild(texta);
    elemTR.appendChild(elemTDi);
    elemTR.appendChild(elemTDf);
    elemTR.appendChild(elemTDl);
    elemTR.appendChild(elemTDa);
    table.appendChild(elemTR);
    let az = sorting_descendingly_on(data1,option);
    i=1;
    for (let index = 0; index < data1.length; index++) {
        j = index;
        tableCreate(az);
    }
    
}