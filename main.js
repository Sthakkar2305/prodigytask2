var sec=0,min=0,ms=0,houar=0;
var timer=0;
function timercount()
{
    ms++
    ll1.innerHTML=ms;

    if(ms==100)
    {
        sec++
        ll2.innerHTML=sec;
        ms=0;

        if(sec==60)
        {
            min++
            ll3.innerHTML=min;
            sec=0;

            if(min==60)
            {
                houar++
                ll4.innerHTML=houar;
                min=0;
            }
        }
    }
}

function  myfun()
{
  timer=setInterval(timercount,1)
}

function myfun1()
{
    clearInterval(timer);
}

function myfun2()
{
    clearInterval(timer);
    ll1.innerHTML="";
    ll2.innerHTML="";
    ll3.innerHTML="";
    ll4.innerHTML="";
    ll5.innerHTML="";
    ms="0";
    sec="0";
    min="0";
    houar="0";
}
var f=0;
function myfun3()
{
    f++;
    
    ll5.innerHTML=f+"."+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+houar+":"+min+":"+sec+":"+ms+"<br>"+ll5.innerHTML;
          
  
    
}