const submit = document.getElementById("submit");
const cancle = document.getElementById("cancle");

function setValueChange(){
    var title = document.getElementById('n_title').value;
    var writer = document.getElementById('n_writer').value;
    var password = document.getElementById('n_password').value;
    var cont = document.getElementById('n_cont').value;  
    
    /*객체형일 경우를 대비하여 JSON 쓸 필요 있어보임*/

    if(submit) {/*등록을 누르면 로컬스토리지 올라가게 else 취소 누르면 데이터 삭제*/
        window.localStorage.setItem("title",title);
        window.localStorage.setItem("writer",writer);
        window.localStorage.setItem("password",password);
        window.localStorage.setItem("cont",cont);
    }
}

if(cancle) {
    window.localStorage.removeItem();
}