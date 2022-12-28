let buttonBeforeEl=document.getElementById("button-before");
let buttonAfterEl=document.getElementById("button-after");
let textEl=document.getElementById("textBox");


buttonBeforeEl.addEventListener('click',function(){
fetch('https://apis.scrimba.com/bored/api/activity')
  .then((response) => response.json())
  .then((data) => {
  console.log(data);
  textEl.textContent=data.activity;
  document.body.classList.add("fun");
  })
  reset();
})

buttonAfterEl.addEventListener('click',function(){
  set();
})

function reset(){
  buttonAfterEl.style.display="block";
  buttonBeforeEl.style.display="none";
}

function set(){
  buttonAfterEl.style.display="none";
  buttonBeforeEl.style.display="block";
  textEl.textContent="";
}