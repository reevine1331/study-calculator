let value; //表示内容
let calculation = 0; // 1 = 足し算, 2 = 引き算, 3 = 掛け算, 4 = 割り算
let firstValue = 0;
let secondValue = 0;

//画面が描画された時の処理
window.onload = function () {
 value = 0; //初期化
 updateValue()
}

//数字のボタン押した時
function setNumber(number) {
  if (value === 0) { //まだ数字が未入力or数字がゼロのとき
   value = number;
  } else {
   value = String(value) + String(number);
  }
 updateValue()
 console.log('VALUE:' + value,'CALCULATION:' + calculation, 'FIRST:' + firstValue, 'SECOND:' + secondValue)
}

// =ボタン押した時
function setCalculation(calcNumber) {
 calculation = calcNumber;
 firstValue = value;
 value = 0;
 console.log('VALUE:' + value,'CALCULATION:' + calculation, 'FIRST:' + firstValue, 'SECOND:' + secondValue)
}

//+-x÷を押した時
function calc() {
 secondValue = value;
 //条件分岐
 switch (calculation) {
  case 1:
   value = Number(firstValue) + Number(secondValue);
   firstValue = value;
   updateValue()
   return;
  case 2:
   value = Number(firstValue) - Number(secondValue);
   firstValue = value;
   updateValue()
   return;
  case 3:
   value = Number(firstValue) * Number(secondValue);
   firstValue = value;
   updateValue()
   return;
  case 4:
   value = Number(firstValue) / Number(secondValue);
   firstValue = value;
   updateValue()
   return;
  default:
   return;
 }
} 

//クリアボタン
function clearValue() {
 value = 0;
 updateValue()
}

//DOMの更新(描画部分）
function updateValue() {
 document.getElementById('calc-value').innerHTML = value;
}