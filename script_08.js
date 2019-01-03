note.counter = 0;

for (i = 0; i <= localStorage.length; i++) { 
    note.counter ++;
    
    importJSON = localStorage.getItem(i);
    var data = JSON.parse(importJSON);
    
    var body = document.body;
    
    var createNote = document.createElement("div");
        createNote.className = 'note';
        createNote.id = 'note'; 
        body.appendChild(createNote);

        var createImg = document.createElement("IMG");
        createImg.setAttribute("src", "Assets/notebg.png");
        newDiv = document.getElementById('note');
        newDiv.appendChild(createImg);

        var createPara = document.createElement("p");
        createPara.className = 'text-right';
        createPara.innerText = data.discription;
        newDiv.appendChild(createPara);

        var createDate = document.createElement("SPAN");
        createDate.className = 'date';
        createDate.innerText = data.deadline;
        newDiv.appendChild(createDate);

        var createTime = document.createElement("SPAN");
        createTime.className = 'time';
        createTime.innerText = data.time;
        newDiv.appendChild(createTime);
}


/*
function NotesFactory(i) {
        Note.counter ++;
        this.id = Note.counter;   
    }
    Note.counter = 0;
    Note.prototype.class = 'noteStyle';
*/

    var form = document.getElementById('new-note');
form.onsubmit = NotesFactory;