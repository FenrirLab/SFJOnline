//　ボタンの要素を取得
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");



//ボタンをクリックしたときの処理
button1.addEventListener("click",function(e){
	e.preventDefault();

	const bore = document.getElementById("bore").value;
	const stroke = document.getElementById("stroke").value;

	const cc = ((Math.pow(bore,2) / 4) * Math.PI * stroke)/1000;

	const resultform1 = document.getElementById("resultform1");
	resultform1.value = cc;

});

button2.addEventListener("click", function(e){
	e.preventDefault();

	const inputmm = document.getElementById("inputmm").value;
	const math2 = inputmm * 0.0393701;

	const resultform2 = document.getElementById("resultform2");
	resultform2.value = math2;
});

button3.addEventListener("click", function(e){
	e.preventDefault();

	const inputvalue = document.getElementById("inputvalue").value;
	const math3 = inputvalue * 6.895;

	const resultform3 = document.getElementById("resultform3");
	resultform3.value = math3;
});

button4.addEventListener("click", function(e){
	e.preventDefault();

	const inputvalue = document.getElementById("inputvalue").value;
	const math4 = inputvalue * 0.145038;

	const resultform3 = document.getElementById("resultform3");
	resultform3.value = math4;
});