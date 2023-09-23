Const fs = require(‘fs’);
Function isKaprekarNumber(number) {
 If (number === 1) return true;
 Const square = number * number;
 Const squareStr = square.toString();
 For (let I = 1; I < squareStr.length; i++) {
 Const leftPart = parseInt(squareStr.slice(0, i));
 Const rightPart = parseInt(squareStr.slice(i));
 If (leftPart + rightPart === number && leftPart !== 0 && rightPart !== 0) {
 Return true;
 }
 }
 Return false;
}
Function findKaprekarNumbers(start, end) {
 Const kaprekarNumbers = [];
 For (let I = start; I <= end; i++) {
 If (isKaprekarNumber(i)) {
 kaprekarNumbers.push(i);
 }
 }
 Return kaprekarNumbers;
}
Const start = 1;
Const end = 1000;
Const kaprekarNumbers = findKaprekarNumbers(start, end);
Fs.writeFileSync(‘kaprekar_numbers.txt’, kaprekarNumbers.join(‘\n’), ‘utf-8’);
Console.log(`Kaprekar numbers between ${start} and ${end} have been written to 
kaprekar_numbers.txt`);
