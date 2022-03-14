// ========== Solution one
function isPalindromo(string) {
	if (!string) return;
    if (!string.length) return;
	// string recebida comparada a string invertida
	console.log(string === string.split('').reverse().join(''));
}
// isPalindromo('cat'); // false
// isPalindromo('asa'); // true

// ========== Solution two
function isPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; /* até metade da palavra*/ i++) {
        console.log(i+': '+string[i]+' !== '+ (string.length - 1 - i)+': '+string[string.length - 1 - i]);
		if (string[i]/*do inicio*/ !== string[string.length - 1 - i]/*do fim*/) {
			return false
		}
	}
	return true;
}
// isPalindromo2('cat'); // false
// isPalindromo2('asa'); // true

// //============ testing ============
// var string = 'teste';
// string = string.split(''); // ['t', 'e', 's', 't', 'e']
// console.log(string);
// string = string.reverse(); // ['e', 't', 's', 'e', 't']
// console.log(string);
// string = string.join(''); // 'etset'
// //============ testing ============
