let id = $('#id');
        let pw = $('#pw');
        let btn = $('#btn');
        
        $(btn).on('click', function() {
            if($(id).val() == "") {
                $(id).next('label').addClass('warning');
                setTimeout(function() {
                    $('label').removeClass('warning');
                }, 1500);
            }
            else if($(pw).val() == "") {
                $(pw).next('label').addClass('warning');
                setTimeout(function() {
                    $('label').removeClass('warning');
                }, 1500);
            }
        });

//NoMultiChk 학생, 교직원 / 외부인 중복 체크 안되게 설정하는 function
function NoMultiChk(chk){
    var obj = document.getElementsByName("box");
     for(var i=0; i<obj.length; i++){
       if(obj[i] != chk){
         obj[i].checked = false;
       }
     }
  }
