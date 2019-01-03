//Write HTML form
// Submit
//Save the text to JSON
//Save submit date JSON
//Save submit Hour
//Present the exsisting notes
//Delete notes with x

 counter =0;

    function handleFormSubmit(event) {
        var newnote = form.name.value;
        counter = counter + 1;
        // alert(newnote);
       
        var dataAsJSON = JSON.stringify(newnote);

        localStorage.setItem(counter, dataAsJSON);
        
        var importJSON = localStorage.getItem('note');
        var data = JSON.parse(importJSON); 
        
        document.getElementById("new-note").reset();
        
        console.log(data);
        
        
        return false;
    }
        
        
    var form = document.getElementById('new-note');
    form.onsubmit = handleFormSubmit;



   //relevantnote.innerText = newnote;
   //        var dataAsJSON = localStorage.getItem('note');
   //var data = JSON.parse(dataAsJSON); 
   //console.log(data);
   //var relevantnote = document.getElementById("old-note");
   //relevantnote.innerText = data;