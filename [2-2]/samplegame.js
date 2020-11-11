var ck=0;
function Bt(x){
	if(document.sw.B[x].value=="×" || document.sw.B[x].value=="○"){
		alert("このマスは選ばれています。");
	}else if(ck%2==0){
		document.sw.B[x].value="○";
		ck++;
		document.sw.B[x].style.color ="white";
		document.sw.B[x].style.background = "red";
		GameOverA();
	}else if(ck%2!=0){
		document.sw.B[x].value="×";
		++ck;
		document.sw.B[x].style.color ="#FACC2E";
		document.sw.B[x].style.background = "green";
		GameOverB();
	}
	/*
	ckでボタンの回数を管理できた。
	あとは勝敗の判定
	引き分け
	*/
}
function init(){
		i=[0,0,0,0,0,0,0,0,0];
		ck=0;
	for(var j=0;j<9;j++){
		document.sw.B[j].value="　 ";
		document.sw.B[j].style.background = "black";
	}
}
function GameOverA(){
for(var i=0;i<9;i++){
	if(document.sw.B[i].value!="　 "){
		if(document.sw.B[0].value=="○"){
			if(document.sw.B[3].value=="○"){
				if(document.sw.B[6].value=="○"){
					alert("○の勝ち");
					init();
				}
			}
			if(document.sw.B[4].value=="○"){
				if(document.sw.B[8].value=="○"){
					alert("○の勝ち");
					init();
				}
			}
			if(document.sw.B[1].value=="○"){
				if(document.sw.B[2].value=="○"){
					alert("○の勝ち");
					init();
				}
			}
		}
		if(document.sw.B[2].value=="○"){
			if(document.sw.B[4].value=="○"){
				if(document.sw.B[6].value=="○"){
					alert("○の勝ち");
					init();
				}
			}
			if(document.sw.B[5].value=="○"){
				if(document.sw.B[8].value=="○"){
					alert("○の勝ち");
					init();
				}
			}
		}
		if(document.sw.B[3].value=="○"){
			if(document.sw.B[4].value=="○"){
				if(document.sw.B[5].value=="○"){
					alert("○の勝ち");
					init();
				}
		}
	}
		if(document.sw.B[6].value=="○"){
			if(document.sw.B[7].value=="○"){
				if(document.sw.B[8].value=="○"){
					alert("○の勝ち");
					init();
				}
			}
		}
		if(document.sw.B[1].value=="○"){
			if(document.sw.B[4].value=="○"){
				if(document.sw.B[7].value=="○"){
					alert("○の勝ち");
					init();
			}
		}
	}
	}
	if(ck==9){
		alert("引き分け");
		init();
	}
}
}
function GameOverB(){
for(var i=0;i<9;i++){
	if(document.sw.B[i].value!="　 "){
		if(document.sw.B[0].value=="×"){
			if(document.sw.B[3].value=="×"){
				if(document.sw.B[6].value=="×"){
					alert("×の勝ち");
					init();
				}
			}
			if(document.sw.B[4].value=="×"){
				if(document.sw.B[8].value=="×"){
					alert("×の勝ち");
					init();
				}
			}
			if(document.sw.B[1].value=="×"){
				if(document.sw.B[2].value=="×"){
					alert("×の勝ち");
					init();
				}
			}
		}
		if(document.sw.B[2].value=="×"){
			if(document.sw.B[4].value=="×"){
				if(document.sw.B[6].value=="×"){
					alert("×の勝ち");
					init();
				}
			}
			if(document.sw.B[5].value=="×"){
				if(document.sw.B[8].value=="×"){
					alert("×の勝ち");
					init();
				}
			}
		}
		if(document.sw.B[3].value=="×"){
			if(document.sw.B[4].value=="×"){
				if(document.sw.B[5].value=="×"){
					alert("×の勝ち");
					init();
				}
		}
	}
		if(document.sw.B[6].value=="×"){
			if(document.sw.B[7].value=="×"){
				if(document.sw.B[8].value=="×"){
					alert("×の勝ち");
					init();
				}
			}
		}
		if(document.sw.B[1].value=="×"){
			if(document.sw.B[4].value=="×"){
				if(document.sw.B[7].value=="×"){
					alert("×の勝ち");
					init();
			}
		}
	}
	}
	if(ck==9){
		alert("引き分け");
		init();
	}
}
}