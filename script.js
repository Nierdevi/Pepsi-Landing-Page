function forr() {
    let x = document.getElementById("Navv");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function yess(){
    let y =document.getElementById("Navv");
    if (y.style.fontSize=20){
        y.style.display="none"
    }
}


function imgSlider(anything){
    document.querySelector('.IMg').src=anything;
}

function changebg(color){
    const Back=document.querySelector('.background');
    Back.style.background=color;
}

