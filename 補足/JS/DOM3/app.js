document.addEventListener('DOMContentLoaded', function() {
  let elem = document.getElementById('elem');
  elem.addEventListener('mouseover', function() {
    //thisはイベントの発生元を表す
    this.style.color = '#ff0000';
  }, false)

  elem.addEventListener('mouseout', function() {
    this.style.color = '';
  }, false)

  
  let elem2 = document.getElementById('elem2');
  elem2.addEventListener('mouseover', function() {
    this.className = 'blue pointer';
  }, false);

  elem2.addEventListener('mouseout', function() {
    this.className = '';
  }, false);


  let elem3 = document.getElementById('elem3');
  elem3.addEventListener('click', function() {
    if (this.className === 'blue') {
      this.className = '';
    } else {
      this.className = 'blue';
    }
  }, false)


  let elem4 = document.getElementById('elem4');
  elem4.addEventListener('click', function() {
    //split = 文字列を配列にする。引数は区切り文字
    let classes = this.className.split(' ');
    
    //indexOf = 配列の何番目に引数に指定した文字があるか確認
    //戻り値はkey, 存在しない場合は-1がかえるx
    let index = classes.indexOf('blue');
    
    if (index === -1) {
      classes.push('blue');
    } else {
      classes.splice(index, 1);
    }

    //join = 配列を文字列にする。引数は区切り文字
    this.className = classes.join(' ');
  }, false);

  let elem5 = document.getElementById('elem5');
  elem5.addEventListener('click', function() {
    this.classList.toggle('blue');
  }, false)

}, false);