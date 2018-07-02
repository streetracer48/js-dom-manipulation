let btn = document.querySelector('#btns')

let para= document.querySelector('#para')

let isShown = false

btn.addEventListener('click', function() {

 if(isShown)
 {
    para.style.visibility = 'hidden'
    isShown = false
    btn.innerHTML='show'


 }
 else
 {
     para.style.visibility = 'visible'
isShown =true
btn.innerHTML='hide'

 }

})

