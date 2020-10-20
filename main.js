
const share = document.getElementById("share");

function action (){
    if(visible.style.visibility === "hidden"){
        visible.style.visibility ="visible";
        share.classList.add("share--click");   
    } else {
        visible.style.visibility = "hidden";
        share.classList.remove("share--click");
    }
}

share.addEventListener("click",action);