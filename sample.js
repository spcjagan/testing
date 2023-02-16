const buttons= document.querySelectorAll("button");
console.log(buttons);

let calculation=[];

function calculate(button){
    const value= button.textContent
    calculation.push(value)     

}

buttons.forEach(button =>button.addEventListener('click',()=>calculate(button)))
