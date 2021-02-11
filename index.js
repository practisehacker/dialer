var buttons = document.getElementsByClassName("button");
// here we have accessed all the buttons with class buttonclass
var display = document.getElementById("view");
// we have accessed view area
var str = "";
// display.textContent = "0";
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // we have added a click event listener
    var value = this.getAttribute("data-value");
    // we have taken the value of clicked button
    str = str + value;
    // we have added the value to string

    display.textContent = str;
    // then at last we have displayed the str
  });
}
var backSpace = document.getElementById("backspace");
backSpace.addEventListener("click", function () {
  // here we have accesed the backspace button
  str = str.slice(0, -1);
  // then we have sliced the string using slice function
  display.textContent = str;
  // then at last we have display content
});
