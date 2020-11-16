let ck=0;
let num = 9;

function Bt(x){
  var sw = document.sw.B[x];
	if(sw.value=="×" || sw.value=="○"){
		alert("このマスは選ばれています。");
	}else if(ck%2==0){
		sw.value="○";
		sw.style.color ="white";
		sw.style.background = "red";
	}else if(ck%2!=0){
		sw.value="×";
		sw.style.color ="#FACC2E";
		sw.style.background = "green";
	}
	ck++;
	GameOver(sw.value);
	/*
	ckでボタンの回数を管理できた。
	あとは勝敗の判定
	引き分け
	*/
}
function init(){
  ck=0;
	for(var cnt=0;cnt<num;cnt++){
		document.sw.B[cnt].value="　 ";
		document.sw.B[cnt].style.background = "black";
	}
}
function GameOver(play_ans){

  let vic = play_ans + "の勝ち";
  let sw_b = document.sw.B;

  for(var i=0;i<num;i++){

    if(sw_b[i].value!="　 "){

      if(sw_b[0].value==play_ans){
        if(sw_b[3].value==play_ans){
          if(sw_b[6].value==play_ans){
            alert(vic);
            init();
          }
        }
        if(sw_b[4].value==play_ans){
          if(sw_b[8].value==play_ans){
            alert(vic);
            init();
          }
        }
        if(sw_b[1].value==play_ans){
          if(sw_b[2].value==play_ans){
            alert(vic);
            init();
          }
        }
      }

      if(sw_b[1].value==play_ans){
        if(sw_b[4].value==play_ans){
          if(sw_b[7].value==play_ans){
            alert(vic);
            init();
          }
        }
      }

      if(sw_b[2].value==play_ans){
        if(sw_b[4].value==play_ans){
          if(sw_b[6].value==play_ans){
            alert(vic);
            init();
          }
        }
        if(sw_b[5].value==play_ans){
          if(sw_b[8].value==play_ans){
            alert(vic);
            init();
          }
        }
      }

      if(sw_b[3].value==play_ans){
        if(sw_b[4].value==play_ans){
          if(sw_b[5].value==play_ans){
            alert(vic);
            init();
          }
        }
      }

      if(sw_b[6].value==play_ans){
        if(sw_b[7].value==play_ans){
          if(sw_b[8].value==play_ans){
            alert(vic);
            init();
          }
        }
      }

    }
    if(ck==num){
      alert("引き分け");
      init();
    }
  }
}
