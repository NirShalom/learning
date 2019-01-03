


function NotesFactory(i) {
        Note.counter ++;
        this.id = Note.counter;   
    }
    Note.counter = 0;
    Note.prototype.class = 'noteStyle';


    var form = document.getElementById('new-note');
form.onsubmit = NotesFactory;