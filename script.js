let form = document.getElementById('my-form');
form.addEventListener('submit',onSubmit)
let inp = document.getElementsByTagName('input');

let users=0;
function onSubmit(event){
    event.preventDefault();
    console.log(inp)
    users++;
    
    
    event.target.name.value='';
    event.target.email.value='';
    event.target.phone.value='';
    event.target.date.value=''; 
    event.target.time.value='';

}