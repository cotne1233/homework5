let string = "12345"

let smth = string.split('')
console.log(smth);
for (let item of smth) {
    console.log(item += smth);
}
//?

let array1 =["hello1", 14, 24, 'hello2']
for (let item of array1) {
    if (typeof item == "number") {
        console.log(item);
    }
} 

let array2 = [14, 150, 'css', null, 'javascript', 25];

let newarray2 = array2.map(function (x) {
    // ვერ მივხვდი
})

let info = "Good Day"
console.log(info.slice(5,8));

function hello(test) {
    test = "hello"
    console.log(test.length);
}//?

let pass = prompt("capital of georgia");
        if (pass=="Tbilisi") {
          console.log("CORRECT!");
        }
        else if (pass=="tbilisi") {
            console.log("CORRECT!");
          }
        else 
        {
        console.log("incorrect answer, try again!");
 }

 let link = "https://google.com"

if (link.indexOf("https://")) {
    console.log("yes it contains https://");
} else {
    console.log("nope it doesn't.");
}

let fruits = ["apple", "mango", "avocado", "kiwi"]

fruits.splice(3,0,'strawberry');
console.log(fruits);

let massi2ve = ["ფორთოხალი", "ბანანი", "მსხალი"]
console.log(massi2ve.length);
massi2ve.push("ვაშლი", "ანანასი") 
massi2ve.unshift("საზამთრო")
console.log(massi2ve.length);
massi2ve.splice(1,1, "მანგო")