

counter =0;

function handleFormSubmit(event) {
    var name = form.name.value;
    var taskDate = form.taskDate.value;
    var taskHour = form.taskDate.value;
    
    var myTask = {discription: name, deadline: taskDate, time: taskHour,};
    
    counter = counter + 1;
    
    var dataAsJSON = JSON.stringify(myTask);

    localStorage.setItem(counter, dataAsJSON); 
    
    document.getElementById("new-note").reset();

        
        importJSON = localStorage.getItem("1");
        var data = JSON.parse(importJSON);
       
        
        var createNote = document.createElement("div");
        var createImg = document.createElement("IMG");
        createImg.setAttribute("src", "Assets/notebg.png")
        createNote.innerText = data.discription; 
       
        var body = document.body;
        body.appendChild(createNote);
        body.appendChild(createImg);
        console.log(data);
        
    return false;

}
   
/*function handleFormSubmit(event) {
    var body = document.body;
    importJSON = localStorage.getItem('1');
    var data = JSON.parse(importJSON);
    
    createNote = document.createElement('div');
    createNote.innerText = data; 
    body.appendChild(createNote);
    }
    */
    
var form = document.getElementById('new-note');
form.onsubmit = handleFormSubmit;
//---------------------------------------------------------------------------------------


//var importJSON = localStorage.getItem('1');

//var data = JSON.parse(importJSON);



/*

function createnote (){
    var newNoteElement = document.createElement('div');
    newDivElement.innerText = 'this is a dynamic child'; 
    body.appendChild(newNoteElement);
    
    }




<div class="note">
<img src="Assets/notebg.png" >
<textarea class="text-right" rows="10" cols="18">Your note....</textarea>
<p class="date" rows="1" cols="10">31/12/2018</textarea>
<textarea class="time" rows="1" cols="10">23:45</textarea>
</div>
*/