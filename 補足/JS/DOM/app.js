// getElementById
let date = new Date();
let hoge = document.getElementById('hoge');
hoge.textContent = date.toLocaleString();


// getElementsByname
let list = document.getElementsByTagName('a');
console.log(list);
for (let i = 0, len = list.length; i < len; i++) {
  console.log(list.item(i).href);
}

// getElementsByName
// 戻り値はNodeListオブジェクト
let name = document.getElementsByName('email')
console.log(name[0].value);

//getElementsByClassName
let fuga = document.getElementsByClassName('fuga');
for (let i = 0, len = fuga.length; i < len; i++) {
  console.log(fuga.item(i).textContent);
}

//class名を複数していると全てを含んでいる要素を返す
let moge = document.getElementsByClassName('fuga moge');
for (let i = 0, len = moge.length; i < len; i++) {
  console.log(moge.item(i).className);
}

// querySelector
// 戻り値はElementオブジェクト(単一の要素)
let tako = document.querySelector('#tako .ika');
console.log(tako.tagName);

// querySelectorAll
// 戻り値はNodeListオブジェクト
let ika = document.querySelectorAll('#tako .ika');
for (let item of ika) {
  console.log(item.tagName);
}
//getxxx id, classで特定できる時
//queryxxx 複雑な条件で検索が必要な時

//ノードウォーキング
let fruits = document.getElementById('fruits');
fruits.childNodes;
for (let item of fruits) {
  if (item.nodeType === 1) {
    console.log(item.value);
  }
}
//子要素は要素ノードだけとは限らない(テキストノードの可能性もある)
//今回は要素ノードだけを取得したいのでif文を使っている

//イベントハンドラー
function btna_click() {
  window.alert('ボタンAがクリックされました。')
}

//画面がロードされた時
//コンテンツ + 画像がロードされたら
window.onload = function() {
  //ボタンがクリックされた時のイベントを登録
  document.getElementById('btnB').onclick = function() {
    window.alert('ボタンBがクリックされました');
  }
}

//イベントリスナー
//DOMContentLoadedイベントリスナー→コンテンツのロードが終わったら実行
//画像のロードは待たない
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btnC').addEventListener('click', function() {
    window.alert('ボタンCがクリックされました');
  }, false);
}, false);


//textContent, innerHTML 
document.addEventListener('DOMContentLoaded', function() {

  // 値をセット
  document.getElementById('text').textContent = 
  '<a href="https://amazon.com">amazon</a>';

  document.getElementById('html').innerHTML = 
  '<a href="https://amazon.com">amazon</a>';
  //共通点 -> 配下のテキストを置き換える
  //相違点 -> html要素にするか否


  //値をゲット
  let textElm = document.getElementById('text2');
  console.log(textElm.textContent);

  let htmlElm = document.getElementById('text2');
  console.log(htmlElm.innerHTML);
  //相違点 textConTent -> 文字だけ innerHTML -> HTML全て

}, false);

//innerHTMLはユーザーからの入力を直接扱わないように注意

//Form要素へのアクセス
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submit').addEventListener('click', function() {
    let name = document.getElementById('input_name');
    console.log(name.value);

    let foods = document.getElementsByName('food');
    let foodsArr = [];
    for (let v of foods) {
      if (v.checked) {
        foodsArr.push(v.value);
      }
    }
    console.log(foodsArr);
  }, false)

  document.getElementById('file').addEventListener('change', function(e) {
    let file = document.getElementById('file').files;
    for (let v of file) {
      console.log(v);
      console.log(v.name);
      console.log(v.size);
    }

    //ファイルを画面に表示
    let reader = new FileReader();
    reader.addEventListener('load', function(e) {
      document.getElementById('upload-img').src = reader.result;
    }, true);
    reader.readAsDataURL(file[0]);

  }, true);
}, false);