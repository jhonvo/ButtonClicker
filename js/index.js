function changetext(element){
  if (element.innerText == "Login"){
    element.innerText = "Logout";
  }
  else {
    element.innerText = "Login"
  }
}

function remove(element){
    element.remove();
}

function message(){
  alert("Ninga was liked!");
}