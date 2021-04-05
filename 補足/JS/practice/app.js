console.log('----------------練習問題----------------');


console.log('----------------偶数、奇数----------------');
console.log('偶数、奇数(if文)----------------');
let i = 2;
if (i % 2 === 0) {
    console.log(`${i}は偶数です`);
} else {
    console.log(`${i}は奇数です`);
}

console.log('偶数、奇数(switch文)----------------');
i = 4;
switch (i % 2 === 0) {
    case true:
        console.log(i + 'は偶数');
        break;
    default:
        console.log(i +  'は奇数');
        break;
}

console.log('数を数える----------------');
let res = 0;
let hoge3 = [1, 3, 4, 5, 8, 9, 3, 3];
for (let v of hoge3) {
    if (v === 3) {
        res++;
    }
}
console.log(res);


console.log('----------------3倍した数を表示する----------------');
for (let i = 1; i <= 10; i++) {
    console.log(i * 3);
}

console.log('----------------FizzBuzz----------------');
console.log('for + if----------------');
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}

console.log('FizzBuzz(switch)----------------');
for (let i = 1; i <= 100; i++) {
  switch (true) {
    case i % 5 === 0 && i % 3 === 0:
      console.log('FizzBuzz');
      break;
    case i % 5 === 0:
      console.log('Buzz');
      break;
    case i % 3 === 0:
      console.log('Fizz');
      break;
    default:
      console.log(i);
      break;
  }
}

console.log('FizzBuzz(while)----------------');
i = 1;
while (i <= 100) {
  if (i % 15 === 0) { //3と5の最小公倍数が15のため
    console.log('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
  i++;
}

console.log('FizzBuzz(one liner)----------------');
//わかりにくいので授業ではやらない
for (let i = 1; i <= 100; i++) console.log((i % 3 ? '' : 'Fizz') + ( i % 5 ? '' : 'Buzz' ) || i);


console.log('----------------関数----------------');


console.log('----------------タイマー処理----------------');

console.log('----------------多次元配列を作る----------------');
// 以下のような多次元配列の作成 + メソッドの使用

console.log('連想配列, メソッド----------------');

let lufy = {
  akumanomi: 'ゴムゴムの実',
  gomugomuno: function(name) {
    return `ゴムゴムの〜${name}!!!!`;
  }
}

let mugiwara = {
  captain: lufy, 
  crew: 'ゾロ'
};

let akagami = {
  captain: 'シャンクス', 
  crew: 'ベックマン'
};

let kaizoku = {
  mugiwara: mugiwara,
  akagami: akagami
};

let kaigun = 'ヘルメッポ';

let onePiece = {
  kaizoku: kaizoku,
  kaigun: kaigun
};

console.log(onePiece.kaizoku.mugiwara.captain.gomugomuno('ピストル'));
console.table(onePiece);

console.log('----------------組み込みオブジェクト----------------');
//偶数、奇数を表示する問題で、渡す数字をランダムにする
i = Math.ceil(Math.random() * 10);
if (i % 2 === 0) {
  console.log(`${i}は偶数です`);
} else {
  console.log(`${i}は奇数です`);
}

//三項演算子で書いた場合
// let result = i % 2 === 0 ? 'は偶数' : 'は奇数'; 
// console.log(i + result);

//おみくじを作ろう 数値 + 配列 + 関数
console.log('数値----------------');
function omikuji(name) {
  i = Math.floor(Math.random() * 4);
  omikuji = ['大吉', '吉', '中吉', '末吉', '凶'];
  return `${name}の運勢は${omikuji[i]}です`;
}
console.log(omikuji('yoshimi'));


console.log('----------------繰り返し処理再び----------------');
//上で作った多次元配列を表示する
// for (let v of onePiece) {
//   console.log(v);
// }

console.log('繰り返しの中断、スキップ----------------');

//九九で結果が30以下になった場合のみ画面に出力(continueを使用する)
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    let res = i * j;
    if (res >= 30) {
      continue;
    }
    console.log(res);
  }
}

//DOMの操作
//ユーザーが入力した内容を元にリンクを作成
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    //入力内容取得
    let url = document.getElementById('url');
    let site = document.getElementById('site');

    let anchor = document.createElement('a');
    anchor.href = url.value;
    
    let text = document.createTextNode(site.value);
    anchor.appendChild(text);
    
    let br = document.createElement('br');

    let list = document.getElementById('list');
    list.appendChild(anchor);
    list.appendChild(br);

  }, false);
})