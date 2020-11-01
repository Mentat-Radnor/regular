let regname = /[A-z]*/i;
let regEmail = /[-.\w]+@[\w-]+\.+[\w-]*/g;
let regTel = /\+7[\d]{10}/g;

let input = document.querySelectorAll('.input');
let error = document.querySelectorAll(".error")
const btn = document.querySelector(".btn");


btn.addEventListener("click", function() {
    
    // let obj = inputName.value.match(regname);
    input.forEach((element,index) => {
        switch (element.dataset.type) {
            case "name":
                if (element.value.match(regname)[0].length == 0){
                    error[index].classList.add("error__vis");
                    element.style.border="1px solid red"
                    // element.focus.style.border ="red";
                    event.preventDefault();
                } else {
                    error[index].classList.remove("error__vis");
                    element.style.border="";
                }
                break;
            case "email":
                
                if (element.value.match(regEmail) == null){
                    error[index].classList.add("error__vis");
                    event.preventDefault();
                    element.style.border="1px solid red"
                } else {
                    error[index].classList.remove("error__vis");
                    element.style.border="";
                }
                break;
            case "tel":
                if (element.value.match(regTel) == null){
                    error[index].classList.add("error__vis");
                    event.preventDefault();
                    element.style.border="1px solid red"
                } else {
                    error[index].classList.remove("error__vis");
                    element.style.border="";
                }
                    break;            
        }
    })  
})