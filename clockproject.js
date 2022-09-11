function clock (){

    var hour=document.getElementById("Hours");
    var minutes=document.getElementById("Minutes");
    var seconds=document.getElementById("Seconds");
    var am=document.getElementById("PM");

    var time = new Date();
    var a=time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    var b=time.getMinutes() ;
    var c=time.getSeconds() ;
    var d=time.getHours()>= 12 ? "PM" : "AM";
    
    hour.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
    am.innerHTML=d;

}

setInterval(clock,1000);


function setTime() {

    var i=document.getElementById("wakeUpTimeSelector").value;
    var j=document.getElementById("lunchTimeSelector").value;
    var k=document.getElementById("napTimeSelector").value;
    
    var hourr =new Date().getHours();
    
    
    if(Number(i) == hourr){

        document.getElementById('img-container').setAttribute("src","wakeup_image.png");
        document.getElementById('text-container').innerHTML="HEY WAKE UP!!";
      
             
    }

     if(Number(j) == hourr){

        document.getElementById('img-container').setAttribute("src","./assets./lunch_image.png");
        document.getElementById('text-container').innerHTML="Lets have some lunch!!";
       
          
           
    }

     if(Number(k) == hourr) {
        document.getElementById('img-container').setAttribute("src","./assets./goodnight_image.png");
        document.getElementById('text-container').innerHTML="Have a Good Night!!";
       
        
    }
  
}