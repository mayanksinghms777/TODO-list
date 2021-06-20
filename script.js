window.onload = function (){
let todolist = document.getElementById('todolist')
let newtask = document.getElementById('newtask')
let addtask = document.getElementById('addtask')

addtask.onclick = function(){

    let li = document.createElement('li')
    li.innerText = newtask.value
    let xbtn = document.createElement('button')
    xbtn.innerText = '❌'
    xbtn.style.margin = '5px'
    xbtn.onclick = function(event){
        event.target.parentElement.remove()
    }
    li.appendChild(xbtn)
    todolist.appendChild(li)
    
}

}