// let string = "";
// let buttons = document
//     .querySelectorAll('button');
// Array.from(buttons).forEach
//     ((buttons) =>{
//         buttons.addEventlistener('click'
//             ,(e)=>{
//                 if(e.target.innerHTML == "="){
//                     string = eval(string);
//                     document.querySelector
//                     ('input').value = String
//                 }
//                 else if (e.target.innerHTML ==
//                     "c") {
//                         string ="";
//                         document.querySelector
//                         ('input').value = string;
//                 } else{
//                     string = string + e.target
//                     .innerHTML;
//                     document.querySelector('input'
//                     ).value = string;
//                 }
//             })
//     })

// Select the input screen and all buttons
const screen = document.querySelector('.screen input');
const buttons = document.querySelectorAll('.container button');

// Initialize the current input
let currentInput = "";

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = "";
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
        } else {
            currentInput += value;
        }

        screen.value = currentInput;
    });
});
