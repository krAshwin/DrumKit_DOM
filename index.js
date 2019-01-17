var numberofButtons=document.querySelectorAll(".drum").length;

for (var i = 0; i<numberofButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var button=this.innerHTML;
  playSound(button);
  buttonAnime(button);
});
}

document.addEventListener("keypress", function(event){
  playSound(event.key);
  buttonAnime(event.key);
});

function playSound(buttonOne){
  switch(buttonOne)
  {
    case 'w':
        var drum1=new Audio("sounds/tom-1.mp3");
        drum1.play();
        break;

    case 'a':
        drum1=new Audio("sounds/tom-2.mp3");
        drum1.play();
        break;

    case 's':
        drum1=new Audio("sounds/tom-3.mp3");
        drum1.play();
        break;

    case 'd':
        drum1=new Audio("sounds/tom-4.mp3");
        drum1.play();
        break;

    case 'k':
        drum1=new Audio("sounds/snare.mp3");
        drum1.play();
        break;

    case 'j':
        drum1=new Audio("sounds/kick-bass.mp3");
        drum1.play();
        break;

    case 'l':
        drum1=new Audio("sounds/crash.mp3");
        drum1.play();
        break;

    default:
        console.log(this.innerHTML);
  }
}

function buttonAnime(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
