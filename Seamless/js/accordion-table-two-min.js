var i,acc=document.getElementsByClassName("accordion_tab_table");for(i=0;i<acc.length;i++)acc[i].addEventListener("click",(function(){this.classList.toggle("active");var t=this.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"})),acc[0].click();