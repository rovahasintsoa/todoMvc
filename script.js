var i=1;
var data1 = [];
function veriLast() {
    let regex =/^[A-Z][a-z]{2,}/;
    let regeX = /[0-9]/;
    let ch = document.getElementById("last").value;
    let p= document.getElementById('pL');
    let xl ="Erreur, last name ne contenir pas une chiffre."
    while(p.firstChild){
        p.removeChild(p.firstChild);
    }
    if (regex.test(ch) && !regeX.test(ch)) {
        return true;
    } else {
      let text =document.createTextNode(xl);
      document.getElementById("pL").appendChild(text);
        return false; 
    }
}
function veriFirst() {
    let regex =/^[A-Z][a-z]{2,}/;
    let regeX = /[0-9]/;
    let ch = document.getElementById("first").value;
    let pF= document.getElementById('pF');
    let xF ="Erreur, first name ne contenir pas une chiffre."
    while(pF.firstChild){
        pF.removeChild(pF.firstChild);
    }
    if (regex.test(ch) && !regeX.test(ch)) {
        return true;
    } else {
      let text =document.createTextNode(xF);
      document.getElementById("pF").appendChild(text);
      return false; 
    }
}
function veriAdresse() {
    let regex =/^[0-9]{2}[\s]Rue\s[,a-zA-Z\s]{1,}[0-9]{1,}\s[,a-zA-Z\s]{1,}/;
    let ch =document.getElementById('adresse').value;
    let pA = document.getElementById("pA");
    let textA = "erreur, entre une adress correcte (ex:14 Rue Lionel Terray, 69740 Genas, France)";
    while(pA.firstChild){
        pA.removeChild(pA.firstChild);
    }
    if (regex.test(ch)) {
        return true;
        
    } else {
        let xAdresse = document.createTextNode(textA);
        document.getElementById("pA").appendChild(xAdresse);
        return false;   
    }
    console.log(regex.test(ch)); 
}

function recuperationData(){
    let last = document.getElementById("last").value;
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
    if(veriAdresse() && veriFirst() && veriLast())
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