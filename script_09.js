counter =0;

function createNewNote (counter) {
    var createNote = document.createElement("div");
        createNote.className = 'note';
        createNote.id = 'note'; 

        var createImg = document.createElement("IMG");
        createImg.setAttribute("src", "Assets/notebg.png");
        newDiv = document.getElementById('note');
        newDiv.appendChild(createImg);

        var createPara = document.createElement("p");
        createPara.className = 'text-right';
        createPara.innerText = data.discription;
    
        var createDate = document.createElement("SPAN");
        createDate.className = 'date';
        createDate.innerText = data.deadline;
       
        var createTime = document.createElement("SPAN");
        createTime.className = 'time';
        createTime.innerText = data.time;
        
        body.appendChild(createNote);
        newDiv.appendChild(createPara);
        newDiv.appendChild(createDate);
        newDiv.appendChild(createTime);
}


    

function handleFormSubmit(event) {
    var name = form.name.value;
    var taskDate = form.taskDate.value;
    var taskHour = form.taskHour.value;
    
    var myTask = {discription: name, deadline: taskDate, time: taskHour,};
    counter = counter + 1;
    var dataAsJSON = JSON.stringify(myTask);
    localStorage.setItem(counter, dataAsJSON); 
    document.getElementById("new-note").reset();

    function createNewNote();
    
    return false;
}

for (i = 1; i <= localStorage.length; i++) { 
    importJSON = localStorage.getItem(i);
    var data = JSON.parse(importJSON);
    
    function createNewNote();
    

    var body = document.body;


var form = document.getElementById('new-note');
form.onsubmit = handleFormSubmit;
