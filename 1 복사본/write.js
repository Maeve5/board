

document.addEventListener("DOMContentLoaded",
    function(e){
        let submitButton = document.querySelector("#submitButton")
        let wtHere = document.querySelector("#wtHere")
        let wTitle = document.querySelector("#wTitle")
        let wwHere = document.querySelector("#wwHere")
        let wWriter = document.querySelector("#wWriter")
        let wpHere = document.querySelector("#wpHere")
        let wPassword = document.querySelector("#wPassword")
        let pwZone = document.querySelector("#pwZone")
        let wcHere = document.querySelector("#wcHere")
        let wCont = document.querySelector("#wCont")

        submitButton.addEventListener("click",
            function(e){
                wtHere.textContent = wTitle.value
                wwHere.textContent = wWriter.value
                wpHere.textContent = wPassword.value
                wcHere.textContent = wCont.value
                wTitle.style.display = "none"
                wWriter.style.display = "none"
                pwZone.style.display = "none"
                wCont.style.display = "none"
                submitButton.value = "수정"
                
            }
        )
    }
)