document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click',function() {
    let result = document.getElementById('result');

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if(xhr.status === 200) {
          result.textContent = xhr.responseText;
        } else {
          result.textContent = 'サーバーエラー';
        }
      } else {
        result.textContent = '通信中';
      }
    }
    xhr.open('GET', 'ajax.php?name=' + encodeURIComponent(document.getElementById('name').value), true);
    xhr.send(null);
    
  });
});