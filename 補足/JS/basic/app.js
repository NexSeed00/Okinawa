// ←コメントアウト

// 'use strict';

console.log('----------------console.log----------------');
console.log('hoge');

console.log('----------------四則演算----------------');
console.log(1 + 1);
console.log(5 - 2);
console.log(3 * 3);
console.log(8 / 2);
console.log(7 % 2);
console.log('5 - 2'); //シングルクォーテーション、ダブルクォーテーションをつけると文字列になる

console.log('----------------文字列連結----------------');
console.log('水嶋' + 'ヒロ');

console.log('----------------変数----------------');
// 変数とはデータを入れる箱
// 箱の名前が変数名
// 変数を使用する理由
// 1. 変更に対応しやすい
// 2. 同じ値を繰り返し使える
// 3. 値の意味がわかりやすい
// 変数名のルール
// 英単語 キャメルケース

let name = '水嶋ヒロ';
console.log(name);
name = '山田孝之';
console.log(name);

let num = 2;
console.log(num);
num = num + 2; //変数を使った計算
console.log(num);
num += 2; //変数を使った計算省略形
console.log(num);

//定数
const age = 20;
console.log(age);
// age = 30; エラーになる。


//テンプレートリテラル
const schoolName = 'NexSeed';
console.log(`私の所属先は、${schoolName}です`);


console.log('----------------条件分岐----------------');
// if (条件式) {
//     処理;
// }
console.log('if文----------------');
let int = 5;
if (int > 3) {
    console.log(`${int}は3より大きいです。`);
}

//真偽値 true false
console.log(int >= 3);

//比較演算子
// <, <=, >, >=, ===, !==

//論理演算子
// && ||

console.log('else if----------------');
int = 5;
if (int >= 10) {
    console.log(int + 'は10以上です')
} else if (int > 3) {
    console.log(`${int}は3より大きいです。`);
} else {
    console.log(`${int}は3以下です。`);
}


console.log('switch----------------');
let signal = 'green';
switch (signal) {
    case 'red':
        console.log('止まれ');
        break;
    case 'green':
        console.log('すすめ');
        break;
    default:
        console.log('その他');
        break;
}

console.log('----------------繰り返し処理----------------');
console.log('for----------------');
// for( 変数の定義, 条件式, 変数の更新)
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


console.log('while----------------');
let j = 11;
while (j <= 20) {
    console.log(j);
    j++;
}

console.log('do while----------------');
let j2 = 21;
do {
    console.log(j2);
    j2++;
} while (j2 <= 20);

console.log('----------------アラート----------------');
//alert, confirm
// alert('Hello World');
// const answer = confirm('削除しますか?');
// console.log(answer);


console.log('----------------関数----------------');
/* 
    関数
    複数の処理を1つにまとめたもの
    function 関数名() {
        処理
    }
*/

// function greeting() {
//     console.log('おはよう');
// }
// greeting();

console.log('引数----------------');
// function greeting(greeting) {
//     console.log(greeting);
// }
// greeting('おはよう');
// greeting('こんにちは');
// greeting('こんばんは');

console.log('ローカル変数----------------');
// function greeting(name) {
//     let morning = 'おはよう' + name;
//     return morning;
// }

// let hoge = greeting('ヒロ');
// console.log(hoge);
// console.log(morning); //エラー

console.log('関数を変数に代入----------------');
// let greeting = function (name) {
//     let greeting = 'おはよう' + name;
//     return greeting;
// }
// let hoge = greeting('seedKun');
// console.log(hoge);


console.log('----------------タイマー処理----------------');
/* 
    タイマー処理
    setInterval ->前の処理が終わったことを確認しない
    setTimeout ->前の処理が終わったか確認
*/

console.log('setInterval----------------');
    // let i = 100;
    // function countDown() {
    //     console.log(i--);
    // }
    // setInterval(function() {
    //     countDown();
    // }, 1000)

console.log('setTimeout----------------');
    // let j2 = 100;
    // function countDown() {
    //     console.log(j2--);
    // }

    // setTimeout(function() {
    //     countDown();
    // }, 1000);

console.log('setTimeOutで繰り返し + timerをとめる----------------');
    // let k = 100;
    // function countDown() {
    //     console.log(k--);
    //     let timer = setTimeout(function() {
    //         countDown();
    //     }, 1000);

    //     if (k < 95) {
    //         clearTimeout(timer);
    //         console.log('timer stop');
    //     }
    // }
    // countDown();

console.log('----------------配列----------------');
// 配列 = グループ化されたデータ
// [値1, 値2]
let student_list = ['Yamada', 'Sato', 'Suzuki'];
console.log(student_list); //student list全体を表示
console.log(student_list[1]); //2番目の値
console.log(student_list[1] = 'Kobayashi'); //値を上書き
student_list.push('Takahashi'); //末尾に値を追加
console.log(student_list);
student_list.pop(); //末尾の値を削除
student_list.shift(); //先頭の値を削除
console.log(student_list);

console.log('----------------連想配列----------------');
//連想配列(オブジェクト)
//{キー1: 値1, キー2: 値2}
let user = {
    food: 'ラーメン', 
    age: 38,
    from: '沖縄'
};
console.log(user);
console.log(user['food']);

let user2 = {
    food: 'UFO',
    age: 20,
    from: '沖縄'
}

console.log('----------------2次元配列----------------');
let users = [user, user2];
console.log(users);
console.log(users[0]);
console.log(users[0]['age']);
console.log(users[1].age); //連想配列(オブジェクト)は.でつなぐこともできる

console.log('----------------メソッド----------------');
let user3 = {
    food: 'sushi',
    age: 27,
    from: '千葉',
    greet: function(name) {//メソッド
        console.log("Hello I'm, " + name + " from " + this.from);
    }
}
user3.greet('Atsushi');

console.log('----------------組み込みオブジェクト----------------');

console.log('文字列----------------');
// let str = new String('Atsushi'); //文字列オブジェクト
let str = "Atsushi"; //文字列リテラル lengthとかの実行時に勝手に文字列オブジェクトの内容を使いたいのかと判断してくれる
console.log(str.length);
console.log(str.substr(0, 4));

console.log('配列----------------');
// let arr = new Array(1, 2, 3);
let arr = [1, 2, 3];
console.log(arr.length);
arr.push(4);
console.log(arr);
arr.splice(1, 0, 1.5); //1番目から1つも置き換えない(追加)
console.log(arr);
arr.splice(4, 1, 3.9); //4番目から1つ置き換える
console.log(arr);

console.log('数値----------------');
console.log(Math.ceil(3.3));
console.log(Math.floor(3.3));
console.log(Math.random());
// let hoge = Math.floor(Math.random() * 10);
// console.log(hoge);

console.log('日付----------------');
let date = new Date();
console.log(date);
console.log(date.getFullYear());

console.log('DOM----------------');
// console.dir(window);
// console.log(window.outerHeight);
// window.location.href = 'http://nexseed.net'; //リダイレクト

// window.document 今開いているページ 省略してdocumentとも書ける
// documentにアクセスするための色々な命令をdocument objedt model(DOM)という
// DOMをいじるときはHTMLのツリー構造を意識することが大切
let test = document.getElementById('test');
test.textContent = 'これに変わる';
test.style.color = 'blue';
test.className = 'addClass';

console.log('イベント----------------');
document.getElementById('btn').addEventListener('click', function() {
    let tag = document.createElement('p');
    let text = document.createTextNode('Hello js');
    document.body.appendChild(tag).appendChild(text);
})

console.log('----------------繰り返し処理再び----------------');
console.log('for in----------------');
//for (仮変数 in 連想配列) {}
//仮変数にはkeyが入る
let prices = {
    'apple': 150,
    'banana': 200,
    'grape': 300,
 }
for (key in prices) {
    console.log(prices[key]);
}


console.log('for of----------------');
let hobbies = ['running', 'swimming', 'reading books'];
for (let value of hobbies) {
    console.log(value);
}

console.log('繰り返しの中断、スキップ----------------');
//break
var result = 0;
for (let i = 1; i <= 100; i++) {
    result += i;

    if (result > 1000) {
        console.log(`合計値が1000を超えるのは${i}の時`);
        break;
    }
}

//continue
for (let i = 1; i <= 30; i++) {
    if (i % 3 !== 0) {
        continue;
    }
    console.log(i);
}


console.log('----------------例外処理----------------');
/*
    try {
        例外が発生するかもしれない命令
    } catch(例外情報を受け取る変数) {
        例外が発生した時に実行される命令
    } finaly {
        例外の有無に関わらず、最終的に実行される命令
    }
*/