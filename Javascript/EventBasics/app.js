const btn = document.querySelector("#v2");

btn.onclick = function(){
  console.log("You clicked me!!")
  console.log("I hope it worked!!")
}

function scream() {
  console.log("AAAAAAAAAAH");
  console.log("STOP TOUCHING ME!");
}
btn.onmouseenter = scream;

const btns = document.querySelector("#v3");

btns.addEventListener('click' , () => {
  alert("CLICKED!");
})