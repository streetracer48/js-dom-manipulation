// let root = document.querySelector('#root')

// let jumbotrondiv = document.createElement("div")

// jumbotrondiv.className='jumbotron text-center'
// jumbotrondiv.setAttribute('id','my-jmb')

// let h1 = document.createElement("h1")
// h1.className ='display-4 py-5'
// h1.innerHTML='<strong>THis is DOM</strong>'
// jumbotrondiv.appendChild(h1)

// root.appendChild(jumbotrondiv

let nameField = document.querySelector('#nameField')
let ul = document.querySelector('#nameList')

nameField.addEventListener('keypress', function(event) {
    if(event.keyCode === 13)
    {
        let name = event.target.value
        createLi(ul,name)
        event.target.value = ""
    }
})

function createLi(ul,name) {
    let li = document.createElement('li')
       li.className='list-group-item d-flex'
       li.innerHTML = name
       let span = document.createElement('span')

       span.className='ml-auto'
       span.innerHTML='x'
       span.fontSize="30px"
       span.style.color ='red'
       span.style.cursor='pointer'

       span.addEventListener('click', function() {
ul.removeChild(li)
       })

li.appendChild(span)
ul.appendChild(li);

}

