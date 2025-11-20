let input = document.getElementById('inpbox');
let button = document.querySelectorAll('button');

let string ="";
let arr = Array.from(button);
arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.valu = string;
        }

        else if(e.target.innerHTML == 'Ac'){
            string ="";
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        } 
        
        
    })
    console.log("nikhil");
})