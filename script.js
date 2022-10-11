// fetching dom elements
// start button fetch
const start=document.getElementById('start');
// stop button fetch
const stop=document.getElementById('stop');
// reset button fetch
const reset=document.getElementById('reset');
// seconds 
const seconds=document.getElementById('seconds')
// for minutes
const minutes=document.getElementById('minutes')
// for hours
const hours=document.getElementById('hours')

// m=minutes,s=seconds,h=hours
var i=0,m=0,s=0,h=0,count=0;
// adding event listener to start button

    
    start.addEventListener('click',()=>{
        if (count==0)
        {
            count++;
            window.timer=setInterval(()=>{
                i++;
                s=i%60
                console.log(s);
                if(s<10)
                    seconds.innerHTML="0"+s;
                else
                    seconds.innerHTML=s;
                if(i%60==0)
                {
                    m++;
                    m=m%60;
                    // minutes display
                    if(m<10)
                        minutes.innerHTML="0"+m+":";
                    else
                        minutes.innerHTML=m+":";
        
                }
                if(i%3600==0)
                {
                        h++;
                        // changing innerhtml after 3600 seconds =hour 
                        if(h<10)
                        hours.innerHTML="0"+h+":";
                        else
                        hours.innerHTML=h+":";
                }
        
            },1000)

        }
        
        
    })


// eventlister on stop to stop timer
stop.addEventListener('click',()=>{
    count=0;
    clearInterval(window.timer)
    
})
// event listner on reset to reset
reset.addEventListener('click',()=>{
    count=0;
    clearInterval(window.timer);
    i=0,s=0,m=0,h=0;
    seconds.innerHTML="00";
    minutes.innerHTML="00:";
    hours.innerHTML="00:";


    
})