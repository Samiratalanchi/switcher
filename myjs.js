function darkmode() {
    let switcher = document.getElementById("myswitcher");
    let cnt = document.getElementById("content");
    let vw = document.getElementById("view");
    if (switcher.checked==true) {
        vw.innerHTML="Dark mode is enable";
    }
    else {
        vw.innerHTML="Light mode is enable";
    }
} 


