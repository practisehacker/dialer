console.log("Inside INdex.js")
var buttons = document.getElementsByClassName("button-class");
var display = document.getElementById("view");
var str = "";
// display.textContent = "0";
for( var i = 0; i < buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        var value =  this.getAttribute("data-value");
        str = str + value;
        console.log(str);
        var text = display.textContent.trim();
        display.textContent=str;
        // console.log(display.textContent.length);
        
    })
}
var backSpace =  document.getElementById("backspace");
backSpace.addEventListener("click", function(){
    str = str.slice(0,-1);
    display.textContent=str; 
})