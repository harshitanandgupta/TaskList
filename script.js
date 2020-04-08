document.getElementById("add").addEventListener('click',add);
document.getElementById("remove").addEventListener('click',remove);
document.getElementById("clear").addEventListener('click',clear);
document.getElementById("filter").addEventListener('keyup',filter);

const text=document.getElementById("task");
const ul=document.getElementById("todo");

function add(e)
{
    if(text.value == '')
    alert("Add an Task");
    else{
        let li=document.createElement('li');
        li.className="card item";
        li.appendChild(document.createTextNode(text.value));
        let icon=document.createElement('i');
        icon.className="fa fa-remove secondary-content";
        li.appendChild(icon);
        ul.appendChild(li);
        text.value="";
    }
}

function remove(e)
{
    if(e.target.classList.contains("fa")){
        e.target.parentElement.remove();
    }

}

function clear()
{
    ul.innerHTML="";
}

function filter(e){
    let text=e.target.value.toLowerCase();
    //console.log(document.querySelectorAll('.item'));
    document.querySelectorAll('.item').forEach(function(todo){
        if(todo.firstChild.textContent.toLowerCase().indexOf(text) == -1){
            todo.style.display='none';
        }
        else
        todo.style.display='block';
    })
}
