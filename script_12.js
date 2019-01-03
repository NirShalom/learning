
var container = document.querySelector('.notesContainer');
var counter =0;

function renderNotes() {
if (counter  ==0){
    for (i = 1; i <= localStorage.length; i++) { 
        importJSON = localStorage.getItem(i);
        var data = JSON.parse(importJSON);
        
        var body = document.body;
        
        var noteElement = document.createElement("div");
            noteElement.className = 'note';
            container.appendChild(noteElement);

        var createImg = document.createElement("IMG");
            createImg.setAttribute("src", "Assets/notebg.png");
            noteElement.appendChild(createImg);

        var createPara = document.createElement("p");
            createPara.className = 'text-right';
            createPara.innerText = data.discription;
            noteElement.appendChild(createPara);

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
            document.body.appendChild(noteElement);
    } 
    
    
    }
        
        else {
            i = localStorage.length;
            importJSON = localStorage.getItem(i);
            var data = JSON.parse(importJSON);
            
            var body = document.body;
            
            var noteElement = document.createElement("div");
                noteElement.className = 'note';
                container.appendChild(noteElement);
        
                var createImg = document.createElement("IMG");
                createImg.setAttribute("src", "Assets/notebg.png");
                noteElement.appendChild(createImg);
        
                var createPara = document.createElement("p");
                createPara.className = 'text-right';
                createPara.innerText = data.discription;
                noteElement.appendChild(createPara);
        
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
            document.body.appendChild(noteElement);
        }
/*
        var btn = document.createElement('button');
            btn.innerText = 'X';
                btn.onclick = function() {
                    document.body.removeChild(noteElement);
                    localStorage.clear(noteElement);
                };
            container.appendChild(btn);
            document.body.appendChild(noteElement);
             */
            
        }

renderNotes();

function handleFormSubmit(event) {
    var name = form.name.value;
    var taskDate = form.taskDate.value;
    var taskHour = form.taskHour.value;
    
    var myTask = {discription: name, deadline: taskDate, time: taskHour,};
    counter = localStorage.length + 1;
    var dataAsJSON = JSON.stringify(myTask);
    localStorage.setItem(counter, dataAsJSON); 
    document.getElementById("new-note").reset();
    
    renderNotes()
    
    return false;
}

var form = document.getElementById('new-note');
form.onsubmit = handleFormSubmit;
