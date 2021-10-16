window.onload=function() {
    let footer = document.getElementById("footer-content");
    let nDate = new Date();
    let wDate = new Date(2021,09,16,16,11,0);
    let dif = Date.parse(nDate)-Date.parse(wDate);
    let minutes= parseInt(dif/60000);
    let hour,day,month,year ;
    let fContent = "created "
    if (minutes < 60) {
        fContent += minutes + " minutes";
    } else {
        hour = parseInt(minutes/60);
        if (hour < 24) {
            if (hour == 1) {
                fContent += hour + " hour";
            } else {
                fContent += hour + " hours";
            }
        } else {
            day = parseInt(hour/24);
            if (day < 30) {
                if (day == 1) {
                    fContent += day + " day";
                } else {
                    fContent += day + " days";
                }
            } else {
                month = parseInt(day/30);
                if (month < 12){
                    if (month == 1) {
                        fContent += month + " month";
                    } else {
                        fContent += month + " month";
                    }
                } else {
                    year = parseInt(month/12);
                    if (year == 1) {
                        fContent += year + " year";
                    } else {
                        fContent += year + " years";
                    }
                }
                
            }
            
        } 

    }
    fContent += " ago";
    footer.innerHTML= fContent;
}
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


