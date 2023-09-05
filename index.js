//selecting buttons//
var numberOfButtons = document.querySelectorAll("button");
for(var i=0; i<numberOfButtons.length; i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
var innerHtml = this.innerHTML;
makeSound(innerHtml);
buttonAnimation(innerHtml);
});
}
// selecting keyboard//
document.addEventListener("keypress",function(event){
makeSound(event.key);
buttonAnimation(event.key);
});

//making sounds//
function makeSound(key){
  switch (key) {
    case "w":
    var one = new Audio("sounds/crash.mp3");
    one.play();
    break;
      case "a":
      var two = new Audio("sounds/kick-bass.mp3");
      two.play();
      break;
        case "s":
        var three = new Audio("sounds/snare.mp3");
        three.play();
        break;
          case "d":
          var four = new Audio("sounds/tom-1.mp3");
          four.play();
          break;
            case "j":
            var five = new Audio("sounds/tom-2.mp3");
            five.play();
            break;
              case "k":
              var six = new Audio("sounds/tom-3.mp3");
              six.play();
              break;
                case "l":
                var sev = new Audio("sounds/tom-4.mp3");
                sev.play();
                break;
    default:

  }
}
function buttonAnimation(currentkey){
var select = document.querySelector("." + currentkey);
select.classList.add("pressed");
setTimeout(function(){ select.classList.remove("pressed")},100);
}
