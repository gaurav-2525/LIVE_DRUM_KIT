var n=document.querySelectorAll("button").length;

for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
         
        var btnval=this.innerHTML;

        makesound(btnval);
        btnanimation(btnval);
 
    })
}


document.addEventListener("keydown",function(event){

makesound(event.key);
btnanimation(event.key);

});


function makesound(key){
    switch(key){

        case"w":
        {

            var sound=new Audio("sounds/crash.mp3");
            sound.play();

        }
        break;

        case"a":
        {

            var sound=new Audio("sounds/kick-bass.mp3");
            sound.play();

        }
        break;
        case"s":
        {

            var sound=new Audio("sounds/snare.mp3");
            sound.play();

        }
        break;

        case"d":
        {

            var sound=new Audio("sounds/tom-1.mp3");
            sound.play();

        }
        break;

        case"j":
        {
            var sound=new Audio("sounds/tom-2.mp3");
            sound.play();
            

        }
        break;

        case"k":
        {

            var sound=new Audio("sounds/tom-3.mp3");
            sound.play();
            

        }
        break;

        case"l":
        {
            var sound=new Audio("sounds/tom-4.mp3");
            sound.play();


        }
        break;
        

        default:
            console.log("key");

    }

}
 

function btnanimation(currentKey){

    var activebtn=document.querySelector("."+currentKey);

    activebtn.classList.add("pressed");
    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },100);
}


