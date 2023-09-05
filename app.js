function addTask(){
    let input = document.getElementById("todo-input")

    //console.log(input.value)


    let list = document.getElementById("listItems");

    let listElement = document.createElement("li");

    let listText = document.createTextNode(input.value);
    
    listElement.appendChild(listText);
    list.appendChild(listElement);

    //...........................Delete Button...................//
    let delbtn = document.createElement("button");
    let delbtnText = document.createTextNode("Delete");
    delbtn.appendChild(delbtnText);

    delbtn.setAttribute("onclick", "delTodo(this)");
    listElement.appendChild(delbtn);


    //...........................Edit Button.....................//
    let Editbtn = document.createElement("button");
    let EditbtnText = document.createTextNode("Edit");

    Editbtn.appendChild(EditbtnText);

    listElement.appendChild(Editbtn);

    list.appendChild(listElement);

    Editbtn.setAttribute("onclick", "editTodo(this)")

   // console.log(listElement);


    input.value=""
}


function deletetodo(){

    let list = document.getElementById("listItems");
    list.remove();
   // list.innerHTML=""
}


function delTodo(e){
    console.log(e.parentNode.remove())
}

function editTodo(e){
   // console.log(e.parentNode.firstChild.nodeValue);
    let currentli = e.parentNode.firstChild.nodeValue;
    let inputField = prompt("Enter updated value", currentli);

    e.parentNode.firstChild.nodeValue = inputField
}