const body = document.querySelector("body"),
    header = document.querySelector("nav"),
    modeToggle = document.querySelector(".darklight"),
    searchToggle = document.querySelector(".searchtoggle")
    navclose = document.querySelector(".navclose")

modeToggle.addEventListener("click", () =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
})
searchToggle.addEventListener("click", () =>{
    searchToggle.classList.toggle("active");
})  
navclose.addEventListener("click", () =>{
    navclose.classList.toggle("active");
})

let navigation = document.querySelector("#negvtion")
navigation.style.maxHeight = "0px";  

function toggleMenu() {
    
           if(navigation.style.maxHeight == "0px")
           {
              navigation.style.maxHeight = "300px";
           }
           else{
              navigation.style.maxHeight = "0px";
           }
}
   // practices Arry//
    // Arry CRUD KI FULL FROM Create Reding Update Deleted//

for (let num = 1; num <= 5; num++){
    console.log(num);
}
let atif = 1;
while (atif <= 5) {
    console.log(atif);
    atif++;
}
let a = 1;
do {
    console.log(a);
    a++;
} while (a <= 5);

function addNumber (a, b){
    return a+b;
}
let sum = addNumber(5, 10);
console.log("Number of sum is:" +sum);


let calcutetheeraoftrangle = (width,height) => {
    return width*height;
}
let area = calcutetheeraoftrangle(5,10);
console.log("Area of Rectangle is:" +area);











