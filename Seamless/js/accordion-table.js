var acc = document.getElementsByClassName("accordion_tab2");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accordion_content2 = this.nextElementSibling;
    if (accordion_content2.style.maxHeight){
      accordion_content2.style.maxHeight = null;
    } else {
      accordion_content2.style.maxHeight = accordion_content2.scrollHeight + "px";
    } 
  });
  acc[0].click()
}