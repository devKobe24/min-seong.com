/* text_iife.js */
// 텍스트 작성과 삭제 즉시 실행 함수
(function(){
  const spanEl = document.querySelector("main h2 span");
  const txtArr = ['iOS Developer', 'Front-End Developer', 'Back-End Developer'];
  let index = 0;
  let currentTxt = txtArr[index].split("");
  function writeTxt(){
    spanEl.textContent  += currentTxt.shift(); 
    if(currentTxt.length !== 0){ 
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
    }else{
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 3000);
    }
  }
  function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if(currentTxt.length !== 0){
      setTimeout(deleteTxt, Math.floor(Math.random() * 100))
    }else{
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split("");
      writeTxt();
    }
  }
  writeTxt();
})();
/* end text_iife.js */