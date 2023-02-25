const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '99':  ' ',
};

function decode(expr) {
    let currentSymbol = '';
    let morseSymbol = '';
    let result = '';
    // write your solution here
    for(let i = 0; i < expr.length; i++) {
        currentSymbol += expr[i];
        //каждую десятку расшифровываем символ
        if(i % 10 === 9 && i > 0) {
            if(currentSymbol.indexOf('*') < 0) {
                //начинаем расшифровывать символ
                for(let j = 0; j < currentSymbol.length; j += 2) {
                    if(currentSymbol[j] + currentSymbol[j + 1] == 11)
                        morseSymbol += '-';
                    else if(currentSymbol[j] + currentSymbol[j + 1] == 10)
                        morseSymbol += '.';
                }
            }
            else
                morseSymbol = '99';
            result += MORSE_TABLE[morseSymbol];
            currentSymbol = '';
            morseSymbol = '';
        }
    }
    return result;
}

module.exports = {
    decode
}