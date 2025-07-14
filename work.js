let no1 = document.querySelector("#no-1");
let no2 = document.querySelector("#no-2");
let no3 = document.querySelector("#no-3");
let no4 = document.querySelector("#no-4");
let no5 = document.querySelector("#no-5");
let no6 = document.querySelector("#no-6");
let no7 = document.querySelector("#no-7");
let no8 = document.querySelector("#no-8");
let no9 = document.querySelector("#no-9");
let no0 = document.querySelector("#no-0");
let calculator = document.querySelector(".calculator");
let intor = document.querySelector(".intro-screen");
let light = document.querySelector("#light");
let dark = document.querySelector("#dark");
let pink = document.querySelector("#pink");
let theme = document.querySelector(".mode-section");
let operators = document.querySelectorAll(".operators");

const divide = document.querySelector("#divide");
const minus = document.querySelector("#minus");
const add = document.querySelector("#add");
const multiply = document.querySelector("#multiply");
const equal = document.querySelector("#equal");
const clearAll = document.querySelector("#clear");
let clickSound = new Audio("sound.mp3");

let display = document.querySelector(".display");
let heading1 = document.querySelector(".intro-heading1")
let heading2 = document.querySelector(".intro-heading")
display.innerText = "";

window.addEventListener("load", ()=>{
    calculator.classList.add("hidden");    
    setTimeout(()=>{
        intor.style.animation = "fade 1s ease forwards";
        setTimeout(()=>{
            intor.classList.add("hidden");
            calculator.style.animation = "showup 1s ease forwards";
            calculator.classList.remove("hidden");
        }, 1000)
    }, 1000)
});


function clickShow(){
    display.innerText += this.innerText;
    clickSound.currentTime = 0;
    clickSound.play()
};
no1.addEventListener("click", clickShow);
no2.addEventListener("click", clickShow);
no3.addEventListener("click", clickShow);
no4.addEventListener("click", clickShow);
no5.addEventListener("click", clickShow);
no6.addEventListener("click", clickShow);
no7.addEventListener("click", clickShow);
no8.addEventListener("click", clickShow);
no9.addEventListener("click", clickShow);
no0.addEventListener("click", clickShow);
divide.addEventListener("click", clickShow);
multiply.addEventListener("click", clickShow);
minus.addEventListener("click", clickShow);
add.addEventListener("click", clickShow);

function sum(){
    let get = display.innerText;
    let finalAns = eval(get);
    display.innerText = finalAns;
     clickSound.currentTime = 0;
    clickSound.play()
}
equal.addEventListener("click", sum);

clearAll.addEventListener("click", ()=>{
    display.innerText = "";
     clickSound.currentTime = 0;
    clickSound.play()
});

theme.addEventListener("change",(event)=>{
    document.body.classList.remove("light", "dark", "pink");
    const mode = event.target.value;
    document.body.classList.add(mode);
    if(mode === "dark"){
        calculator.classList.remove("pink");
        calculator.classList.add("dark-cal");
        operators.forEach(op=>{
            op.classList.remove("green-btn", "operators");
            op.classList.add("gray-btn");
        });
        clearAll.classList.remove("clear");
        clearAll.classList.add("gray-btn");
        display.classList.add("gray-display");


    }else if(mode === "pink"){
        calculator.classList.remove("dark-cal");
        calculator.classList.add("pink-cal");
     operators.forEach(op =>{
        op.classList.remove("operators", "gray-btn");
        op.classList.add("green-btn");
     });
        clearAll.classList.remove("clear");
        clearAll.classList.add("gray-btn");
        display.classList.remove("gray-display");


    }else if(mode === "light"){
        calculator.classList.remove("pink-cal", "dark-cal");
        calculator.classList.add("calculator");
        operators.forEach(op =>{
            op.classList.remove("green-btn", "gray-btn");
            op.classList.add("operators");
        });
        clearAll.classList.remove("gray-btn");
        clearAll.classList.add("clear");
        display.classList.remove("gray-display");
        
    }
});