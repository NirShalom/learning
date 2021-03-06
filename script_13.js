
var notesContainer = document.querySelector('.notesContainer');
var counter =0;

/*if (counter == 0){
    for (i = 1; i <= localStorage.length; i++){
        renderNotes()
    }}else{renderNotes()};
    */
    
function renderNotes() {
        importJSON = localStorage.getItem(i);
        var data = JSON.parse(importJSON);
        
        var body = document.body;
        
        var noteElement = document.createElement("div");
            noteElement.className = 'note';
            notesContainer.appendChild(noteElement);

        var imgElement = document.createElement("IMG");
            imgElement.setAttribute("src", "Assets/notebg.png");
            noteElement.appendChild(imgElement);

        var paraElement = document.createElement("p");
            paraElement.className = 'text-right';
            paraElement.innerText = 'bavana';//data.discription;
            noteElement.appendChild(paraElement);

        var createDate = document.createElement("SPAN");
            createDate.className = 'date';
            createDate.innerText = data.deadline;
            noteElement.appendChild(createDate);

        var createTime = document.createElement("SPAN");
            createTime.className = 'time';
            createTime.innerText = data.time;
            noteElement.appendChild(createTime);

        var btn = document.createElement('button');
            btn.className = 'deleteBtn';
            btn.innerText = 'X';
            btn.onclick = function() {
                localStorage.removeItem(i);
            };
            noteElement.appendChild(btn);
    } 
    
    
    
//renderNotes();

function handleFormSubmit(event) {
    var name = form.name.value;
    var taskDate = form.taskDate.value;
    var taskHour = form.taskHour.value;
    
    var myTask = {discription: name, deadline: taskDate, time: taskHour,};
    counter = localStorage.length + 1;
    var dataAsJSON = JSON.stringify(myTask);
    localStorage.setItem(counter, dataAsJSON); 
    document.getElementById("new-note").reset();
    
    renderNotes();
    
    return false;
}

var form = document.getElementById('new-note');
form.onsubmit = handleFormSubmit;
