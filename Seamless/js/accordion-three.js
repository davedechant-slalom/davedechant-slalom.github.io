var acc = document.getElementsByClassName("accordion_tab_three");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accordion_content_three = this.nextElementSibling;
    if (accordion_content_three.style.maxHeight){
      accordion_content_three.style.maxHeight = null;
    } else {
      accordion_content_three.style.maxHeight = accordion_content_three.scrollHeight + "px";
    } 
  });
}