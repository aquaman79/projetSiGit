function encryptName(name, key) {
    key = key % 26; // pour éviter les clés trop grandes
    var encryptedName = "";
    for (var i = 0; i < name.length; i++) {
        var charCode = name.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode = (charCode - 65 + key) % 26 + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            charCode = (charCode - 97 + key) % 26 + 97;
        }
        encryptedName += String.fromCharCode(charCode);
    }
    return encryptedName;
}


