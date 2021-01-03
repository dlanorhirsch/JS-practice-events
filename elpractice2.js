document.getElementById("btn1");
document.getElementById("btn2");
document.getElementById("btn3");

function visibilityFunc(){
  btn1.addEventListener("click", function(){
    function hide(){
      if(box1.style.visibility === "visible"){
      box1.style.visibility = "hidden";
      } else {
      box1.style.visibility = "visible";
      }
    }
    hide();
  });  
  btn2.addEventListener("click", function(){
    function hide(){
      if(box2.style.visibility === "visible"){
      box2.style.visibility = "hidden";
      } else {
      box2.style.visibility = "visible";
      }
    }
    hide()
  });
  btn3.addEventListener("click", function(){
    function hide(){
      if(box3.style.visibility === "visible"){
      box3.style.visibility = "hidden";
      } else {
      box3.style.visibility = "visible";
      }
    }
    hide()
  })
}