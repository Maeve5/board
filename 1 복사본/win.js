function winopen(){
    win = window.open('view.html', '_self');
}

function Message(msg){
    win.document.getElementById('message').innerText=msg;
}