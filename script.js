var isplaying=false;
var score=0;
var lifeleft;
var action;
var step;
var fruits=['apple','kiwi','mango','orange'];

$(function(){
    
$("#start").click(function(){   
    
    if(isplaying == true){
        window.location.reload();
    }
    else{
       isplaying=true;        
       $("#lifeleft").show();    
       $("#start").html("Reset !");
       
       $("#score").html("Score : " + score);
        
       lifeleft=3;       
       appendheart();       
       addfruits();
    }   
  
  });
    
$("#fruit1").mouseover(function(){
   score++;
   $("#score").html("Score : " + score);
    $("#sound")[0].play();
    clearInterval(action);
   
    $("#fruit1").hide("explode",500);
    setTimeout(addfruits,500);    
    
});

function appendheart(){
    $("#lifeleft").empty();
     for(var i=0;i<lifeleft;i++){
       $("#lifeleft").append('<img src="images/hearts.png" class="hearts"  > ');  
       }   
}

function addfruits(){
    $("#fruit1").show(); 
    
    choosefruit();
     
    $("#fruit1").css({'top' : -70, 'left' :  Math.round(430*Math.random()) 
     });   
    
    
step = 1+Math.round(5*Math.random());

action=setInterval(function(){

$("#fruit1").css('top' ,            $("#fruit1").position().top + step);    
    
if($("#fruit1").position().top > 300){
       
        if(lifeleft > 1){
                       
            $("#fruit1").show();
            choosefruit();
            
             $("#fruit1").css({'top' : -70, 'left':  Math.round(430*Math.random()) 
             });
              
            lifeleft--;
            appendheart();
           
       }        
    else{
        isplaying=true;       
        $("#start").html("Reset!");
        $("#lifeleft").hide(); 
        $("#gameover").html("<p>GAME OVER!!</p> <p>YOUR FINAL SCORE IS : " + score + "</p>");
        $("#score").hide(); 

        $("#gameover").show();
        stopaction();
        
    } 
}
    
},15);      
}

function choosefruit(){
    $("#fruit1").attr('src',"images/" + fruits[Math.floor(4*Math.random())] + ".png") ; 
}

function stopaction(){
    clearInterval(action);
    $("#fruit1").hide();
}
    
    
});