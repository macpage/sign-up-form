let pw = document.querySelector("#password");
let pw2 = document.querySelector("#con-password");
let e = document.querySelector(".pass");
let text = document.createElement("p");
text.innerHTML = "*Passwords do not match."
text.style.position = "absolute";
text.style.width = "200px";
text.style.color = "red";
let btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{
    if(pw.value == pw2.value){
        pw.classList.remove("wrong");
        pw2.classList.remove("wrong");
        e.removeChild(text);
    }else {
        pw.classList.add("wrong");
        pw2.classList.add("wrong");
        e.appendChild(text);
        
    }
})