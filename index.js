//grabs the flex property 
const panels = document.querySelectorAll(".panel");


//toggle open 
function toggleOpen(){
    //gets the classlist of the panel
    this.classList.toggle("open");
}

//toggle active
function toggleActive(e){
    //conditional to check if transitionend is triggered
    if(e.propertyName.includes("flex")){
    //gets the class list of the panel    
    this.classList.toggle("open-active");
}
}

//add event listeners
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));