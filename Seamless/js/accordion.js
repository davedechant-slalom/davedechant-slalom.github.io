var acc = document.getElementsByClassName("accordion_tab");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accordion_content = this.nextElementSibling;
    if (accordion_content.style.maxHeight){
      accordion_content.style.maxHeight = null;
    } else {
      accordion_content.style.maxHeight = accordion_content.scrollHeight + "px";
    } 
  });
}