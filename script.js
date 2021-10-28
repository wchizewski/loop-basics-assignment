// “I’m so happy!” 500 times
for (let num = 1; num <= 500; num++) {
    console.log("I'm so happy!")
}
console.log("--------------------------------------")

// all of the multiples of 4 from 12 to 800
for (let num = 12; num <= 800; num += 4) {
    console.log(num)
}
console.log("--------------------------------------")


// all of the odd numbers from 55 to 11
for (let num = 55; num >= 11; num -= 2) {
    console.log(num)
}
console.log("--------------------------------------")


// sum of the series: 5 + 6 + 7 + 8 + … + 48 + 49 + 50
let sum = 0;
for (let num = 5; num <= 50; num++) {
    sum = sum + num;
}
console.log(sum)
console.log("--------------------------------------")


// sum of the series: 10 + 20 + 30 + … + 90 + 100
sum = 0;
for (let num = 10; num <= 100; num += 10){
    sum = sum + num;
}
console.log(sum)
