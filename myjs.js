window.onload=function() {
    let footer = document.getElementById("footer-content");
    let nDate = new Date();
    let wDate = new Date(2021,09,16,16,11,0);
    let dif = Date.parse(nDate)-Date.parse(wDate);
    let minutes= parseInt(dif/60000);
    let hour,day,month,year ;
    let fContent = "created "
    // get minutes
    if (minutes < 60) {
        fContent += minutes + " minutes";
    } else {
        // get hours
        hour = parseInt(minutes/60);
        if (hour < 24) {
            if (hour == 1) {
                fContent += hour + " hour";
            } else {
                fContent += hour + " hours";
            }
        } else {
            // get days
            day = parseInt(hour/24);
            if (day < 30) {
                if (day == 1) {
                    fContent += day + " day";
                } else {
                    fContent += day + " days";
                }
            } else {
                // get monthes
                month = parseInt(day/30);
                if (month < 12){
                    if (month == 1) {
                        fContent += month + " month";
                    } else {
                        fContent += month + " month";
                    }
                } else {
                    // get years
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

    document.getElementById("card").style.borderColor="#1260cc";
    document.getElementsByClassName("card-header")[0].style.backgroundColor="#1260cc";
    document.getElementsByClassName("card-header")[0].style.color="white";
    document.getElementsByClassName("card-footer")[0].style.backgroundColor="#1260cc";
    document.getElementsByClassName("card-footer")[0].style.color="white";
}
function darkmode() {
    let switcher = document.getElementById("myswitcher");

    if (switcher.checked==true) {
        document.getElementsByTagName("body")[0].style.backgroundColor="#333333";

        document.getElementById("content").style.color="white";

        document.getElementById("card").style.borderColor="white";

        document.getElementsByClassName("card-header")[0].style.backgroundColor="#222222";
        document.getElementsByClassName("card-footer")[0].style.backgroundColor="#222222";
        document.getElementsByClassName("card-body")[0].style.backgroundColor="#444444";
        document.getElementsByClassName("card-body")[0].style.color="white";
    }
    else {
        document.getElementsByTagName("body")[0].style.backgroundColor="#ffffff";

        document.getElementById("content").style.color="black";

        document.getElementById("card").style.borderColor="#1260cc";

        document.getElementsByClassName("card-header")[0].style.backgroundColor="#1260cc";
        document.getElementsByClassName("card-footer")[0].style.backgroundColor="#1260cc";
        document.getElementsByClassName("card-body")[0].style.backgroundColor="#ffffff";
        document.getElementsByClassName("card-body")[0].style.color="black";
    }
} 


