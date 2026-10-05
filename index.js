console.log("welcom js")

let name = "Aziza Nezar Baabod"
console.log(name)

let age = 21
let phone = 777516202
let locations = "Mukalla"

console.log(age)
console.log(phone)
console.log(locations)

let num1= 10
let num2= 20
let num3= 5

if (num1 >= num2 && num1>= num3)
{
    console.log("أكبر رقم", num1)
}

else if (num2>=num1 && num2>=num3)
{
    console.log("أكبر رقم ", num2)
}
else{
    console.log("أكبر رقم ",num3)
}

for (a=1; a<=100 ; a++)
{
    console.log(a)
    if (a == 50){
        console.log("لقد وصلت لنصف العدد")
        break
    }
    
}