// var list = document.getElementById("todoList");

// function todoClick(){
//     var input =  document.getElementById("todoApp");
//     // Work for list and text
//     var li = document.createElement('li');
//     var listtext = document.createTextNode(input.value);
//     li.appendChild(listtext);
//     list.appendChild(li);
//     input.value = ""

//     // Work for delete

//     var deleteBtn = document.createElement("button")
//     var deleteText = document.createTextNode("Delete")
//     deleteBtn.setAttribute("class","elBtn")
//     deleteBtn.appendChild(deleteText)
//     li.appendChild(deleteBtn)

    
// }

var list = document.getElementById("list");

function todoBtn(){
    var input = document.getElementById("todoApp");
    // Work for list and text
    var li = document.createElement('li');
    var litext = document.createTextNode(input.value);
    li.appendChild(litext);
    list.appendChild(li);
    input.value = ""
    // Work for Delete Button
    var deleteBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    deleteBtn.setAttribute("class","btn btn-dark btn-sm delete ");
    deleteBtn.setAttribute("onclick","deleteButton(this)")
    deleteBtn.appendChild(delText);
    li.appendChild(deleteBtn)
    // Work for Edit Button
     
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("class","btn btn-primary btn-sm edit")
    editBtn.setAttribute("onclick","editTodo(this)")
    li.appendChild(editBtn)
    
    
}

function deleteButton(i){
    i.parentNode.remove()
}

function delAll(){
    list.innerHTML = ""
}

function editTodo(e){
    var value = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter  edit item",value);
    e.parentNode.firstChild.nodeValue=editValue
}
