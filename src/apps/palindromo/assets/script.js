function isPalindromo(g) {

	let word = document.getElementById('palindromo').value;
	console.log(word);

	if (!word || !word.length || !isNaN(word))
		alert('Enter a word');
	// string recebida comparada a string invertida
	else if (word === word.split('').reverse().join(''))
		alert('The word is a palindromo');
	else
		alert('The word is not a palindromo');
}

// // ========== Another way to check if it is palindrome
// 	for (var i = 0; i < string.length / 2; /* até metade da palavra*/ i++) {
//         console.log(i+': '+string[i]+' !== '+ (string.length - 1 - i)+': '+string[string.length - 1 - i]);
// 		if (string[i]/*do inicio*/ !== string[string.length - 1 - i]/*do fim*/) {
// 			return false
// 		}
// 	}

// isPalindromo('cat'); // false
// isPalindromo('asa'); // true

// //============ testing ============
// var string = 'teste';
// string = string.split(''); // ['t', 'e', 's', 't', 'e']
// console.log(string);
// string = string.reverse(); // ['e', 't', 's', 'e', 't']
// console.log(string);
// string = string.join(''); // 'etset'
// //============ testing ============
