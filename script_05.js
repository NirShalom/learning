
for (i = 1; i <= localStorage.length; i++) { 
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

counter =0;

function handleFormSubmit(event) {
    var name = form.name.value;
    var taskDate = form.taskDate.value;
    var taskHour = form.taskHour.value;
    
    var myTask = {discription: name, deadline: taskDate, time: taskHour,};
    counter = counter + 1;
    var dataAsJSON = JSON.stringify(myTask);
    localStorage.setItem(counter, dataAsJSON); 
    document.getElementById("new-note").reset();
    
    
    return false;
}

var form = document.getElementById('new-note');
form.onsubmit = handleFormSubmit;
