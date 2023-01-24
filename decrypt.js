function decrypt(cryptedText, cle) {
	let plaintext = "";
	//pour chaque charactère du texte chiffré
	for (let i = 0; i < cryptedText.length; i++) {
		let char = cryptedText[i];
		//si c'est une lettre
		if (char.match(/[a-z]/i)) {
			let charCode = cryptedText.charCodeAt(i);
			//si c'est une minuscule
			if (charCode >= 65 && charCode <= 90) {
				charCode = ((charCode - 90 - cle) % 26) + 90;
				//si c'est une majuscule
			} else if (charCode >= 97 && charCode <= 122) {
				charCode = ((charCode - 122 - cle) % 26) + 122;
			}
			//ajoute le caractère déchiffré au résultat
			plaintext += String.fromCharCode(charCode);
			//sinon l'ajoute tel quel
		} else {
			plaintext += char;
		}
	}
	return plaintext;
}

const cryptedText = "Wkhoxmo";
const cle = 10;

// Test de décryptage
const uncryptedText = decrypt(cryptedText, cle);
console.log("Texte déchiffré: " + uncryptedText);
