/* scroll.js */
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
  const browerScrollY = window.pageXOffset;
  if(browerScrollY > 0){
    headerEl.classList.add("active");
  }else{
    headerEl.classList.remove("active");
  }
});
/* End scroll.js */