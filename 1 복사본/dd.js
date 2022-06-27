const num = 0;

const today = new Date();
const year = today.getFullYear();
const month = ('0' + (today.getMonth() + 1));
const day = today.getDate();
const date = year + '.' + month + '.' + day;

const count = 0;

let title = document.getElementById('wTitle').value;
let writer = document.getElementById('wWriter').value;
let password = document.getElementById('wPassword').value;
let cont = document.getElementById('nCont').value;  

const storage = [
    {num: num,
    title: title,
    writer: writer,
    date: date,
    count: count,
    cont: cont}
]

if(storage.length > 0) {
    window.localStorage.setItem('storage', JSON.stringify(storage))
}

const notice = window.localStorage.getItem("storage")
const 