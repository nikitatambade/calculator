let input=document.getElementById('input');
let buttons=document.querySelectorAll('button');

let string=""

console.log(buttons)

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      let value = e.target.innerText;
      if (value === '=') {
          string = eval(string);
          input.value = string;
      } else if (value === 'AC') {
        string = "";
        input.value = string;
      } else {
        string =string+ value;
        input.value = string;
      }
    })
}
)