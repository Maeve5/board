export function setValueChange(){
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

    const storage = {
        Num:num,
        Title:title,
        Writer:writer,
        Date:date,
        Count:count,
        Cont:cont
    };

    localStorage.setItem("storage", JSON.stringify(storage));

    // let vNum = document.querySelector("#vNum");
    // let vTitle = document.querySelector("#vTitle");
    // let vWriter = document.querySelector("#vWriter");
    // let vDate = document.querySelector("#vDate");
    // let vCount = document.querySelector("#vCount");
    // let vCont = document.querySelector("#vCont");



    const getStorage = JSON.parse(localStorage.getItem('storage'));
    console.log(getStorage);


    // const numV = getStorage[Object.keys(getStorage)[0]];
    // const titleV = getStorage[Object.keys(getStorage)[1]];
    // const writerV = getStorage[Object.keys(getStorage)[2]];
    // const dateV = getStorage[Object.keys(getStorage)[3]];
    // const countV = getStorage[Object.keys(getStorage)[4]];
    // const contV = getStorage[Object.keys(getStorage)[5]];
    
    // vNum.textContent = numV;
    // vTitle.textContent = titleV;
    // vWriter.textContent = writerV;
    // vDate.textContent = dateV;
    // vCount.textContent = countV;
    // vCont.textContent = contV;
}

    // const addData = () => {
    //     const notice = JSON.parse(localStorage.getItem("storage")) || [];
    //     notice.push(storage)
    //     localStorage.setItem("storage", JSON.stringify(notice));
    // }


    // 수정코드

    // const editKey = document.getElementById();
    // const editValue = document.getElementById().value;

    // const editData = JSON.parse(localStorage.getItem('storage'));
    // console.log('before', editData);

    // editData.editKey = editValue;
    // console.log('after', editData);

    // localStorage.setItem('storage',JSON.stringify(editData));