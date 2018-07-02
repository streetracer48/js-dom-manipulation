// // import '../styles/index.scss'

// import { sum, sub  } from './math'


// let headers=document.getElementsByTagName('h1');
// console.log(headers);

// let classes=document.getElementsByClassName('my-para')
// console.log(classes);
// let id= document.getElementById('h1');
// console.log(id);
let btn =$('#click-me');
let colors = ['red', 'green','yellow', 'blue']
let i=0;

btn.addEventListener('click', function()
{
    let h1 = $('#my-h1');
    h1.innerHTML="new welcome Dom hehehe :/";
    h1.style.background = colors[i];
if( i>= colors.length)
{
    i=0
}
else {
i++

}

// alert("i am not working hehehe :/");

})

function $(selector) {
    return document.querySelector(selector);
}



let container = document.querySelectorAll('.container')
console.log(container)



