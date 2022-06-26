
// function setValueChange() {
//     const titleValue = document.getElementById("n_title").value;
//     console.log(titleValue);
// }












const num = 0;

const today = new Date();
const year = today.getFullYear();
const month = ('0' + (today.getMonth() + 1));
const day = today.getDate();
const date = year + '.' + month + '.' + day;

const count = 0;

function setValueChange(){
    
    const title = document.getElementById('n_title').value;
    const writer = document.getElementById('n_writer').value;
    const password = document.getElementById('n_password').value;
    const cont = document.getElementById('n_cont').value;  
    
    const notice = [
        {name:"번호",value:num},
        {name:"제목",value:title},
        {name:"글쓴이",value:writer},
        {name:"작성일",value:date},
        {name:"조회수",value:count},
        {name:"cont",value:cont}
    ];
    
    // new Array();
    // notice[0] = num;
    // notice[1] = title;
    // notice[2] = writer;
    // notice[3] = date;
    // notice[4] = count;
    // notice[5] = cont;
    const submit = document.getElementById("submit");
    
    window.localStorage.setItem("notice",JSON.stringify(notice));
    window.localStorage.setItem("password",password);

    /*객체형인 배열형태로 데이터를 저장하기 위해 JSON 사용*/
}

function getValue(i) {
    setValueChange();
    const noticeBack = JSON.parse(localStorage.getItem("notice"));
    console.log(noticeBack[i].value);
    document.write(noticeBack[i].value);
    /*둘 중에 쓸 수 있나???*/
}


//     if(submit) {/*등록을 누르면 로컬스토리지 올라가게 else 취소 누르면 데이터 삭제*/
//         window.localStorage.setItem("title",title);
//         window.localStorage.setItem("writer",writer);
//         window.localStorage.setItem("cont",cont);
//     }

// if(cancle) {
//     window.localStorage.removeItem();
// }