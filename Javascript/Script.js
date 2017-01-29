const SEUIL = 200;
var numCase = document.getElementById('boucle').innerHTML ;
Saisir = prompt("Combien de casse voulez-vous?")

	if (Saisir>SEUIL){
		alert("chiffre trop grand");
	}
	
	else for (i= 1; i<=Saisir; i++){ 
		if (i%2 ==0){ document.getElementById('boucle').innerHTML += "<lo>"+ i + "</lo>";
		}
		else 	document.getElementById('boucle').innerHTML += "<li>"+ i + "</li>"; 
}




   

