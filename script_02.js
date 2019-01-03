counter =0;

function handleFormSubmit(event) {
    var newnote = form.name.value;
    var forDate = form.taskDate.value;
  
    counter = counter + 1;
   
    var dataAsJSON = JSON.stringify(newnote, forDate);

    localStorage.setItem(counter, dataAsJSON);
    
    var importJSON = localStorage.getItem('note');

    var data = JSON.parse(importJSON); 
    
    document.getElementById("new-note").reset();
    
    return false;
}
    
    
var form = document.getElementById('new-note');
form.onsubmit = handleFormSubmit;
