const endDate =  "9 MAY 2024 12:00 AM"
document.getElementById("end-date").innerText= endDate;
const inputs = document.querySelectorAll("input")
function clock(){
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end-now)/1000;

    if (diff <0 ) return;
    
    // convert into days
    inputs[0].value=(Math.floor(diff/3600/24));
    // calculate hours
    inputs[1].value=Math.floor(diff/3600)%24;
    //calculate minutes
    inputs[2].value=Math.floor(diff/60)%60;
    // calculate Seconds
    inputs[3].value=Math.floor(diff)%60;

}

//initial call
clock()
setInterval(
    ()=> {
        clock()
    },
    1000
)






