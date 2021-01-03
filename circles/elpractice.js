var button = document.getElementById("btn1");
var circ1 = document.getElementById("circle1");

btn1.addEventListener("click", function(){
  function hide(){
    if(circle1.style.visibility === "visible") {
      circle1.style.visibility = "hidden";
    } else {
      circle1.style.visibility = "visible";
  }
}
hide();
});

var circ2 = document.getElementById("circle2");
btn2.addEventListener("click", function(){
  function changeColor(){
    if(circ2.style.backgroundColor === "green") {
    circ2.style.backgroundColor = "purple";
  } else {
    circ2.style.backgroundColor = "green";
  }
}
changeColor();
});

var theCircle = document.querySelector("#circle3");
var box = document.querySelector("#contentContainer");

box.addEventListener("click", getClickPosition, false );

function getClickPosition(e) {
  var xPosition = e.clientX - (theCircle.offsetWidth / 2);
  var yPosition = e.clientY - (theCircle.offsetHeight / 2);

  // offsetWidth / 2 re-positions the circle from its center rather than its edge

  var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px,  0)";
  theCircle.style.transform = translate3dValue;


}



