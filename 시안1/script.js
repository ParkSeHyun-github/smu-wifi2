//NoMultiChk 학생, 교직원 / 외부인 중복 체크 안되게 설정하는 function
function NoMultiChk(chk){
    var obj = document.getElementsByName("box");
     for(var i=0; i<obj.length; i++){
       if(obj[i] != chk){
         obj[i].checked = false;
       }
     }
  }
