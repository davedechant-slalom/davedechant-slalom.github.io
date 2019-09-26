var acc = document.getElementsByClassName("accordion_tab_table");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accordion_content_table = this.nextElementSibling;
    if (accordion_content_table.style.maxHeight){
      accordion_content_table.style.maxHeight = null;
    } else {
      accordion_content_table.style.maxHeight = accordion_content_table.scrollHeight + "px";
    } 
  });
  acc[0].click()
}