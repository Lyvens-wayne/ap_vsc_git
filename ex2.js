let zoneMessage =  document.querySelector("h1")
let Mot = "TryCatch"
let fin = false;
let essaie = 10
while (essaie > 0 & fin == false){
    let MotUser = prompt("Saisir un mot")
    if(MotUser == Mot){
        alert("Trouver")
        fin = true;
    }else{
        essaie--
        alert("Raté il vous restes "+essaie)
    }
}
if(fin == false){
    alert("Perdu")
    zoneMessage.textContent = Mot
}else{
    alert("Gagné")
    zoneMessage.textContent = Mot
}
