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

  let list2 = document.getElementById('list2');
  document.getElementById('del').addEventListener('click', function() {
    console.log(list2);
    list2.removeChild(list2.firstChild);
  }, false);

}, false);