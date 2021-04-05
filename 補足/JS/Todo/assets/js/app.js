//チェックマークとゴミ箱マークのアイコン
let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';
let data;

//もしデータが保存されていれば
if (localStorage.getItem('todoList')) {
  data = JSON.parse(localStorage.getItem('todoList')); //データを取り出す

  renderTodoList();

//もしデータが保存されていなければ
} else {
  // データの保存先を作成
  data = {
    task: [],
    done: []
  };
}
document.getElementById('add').addEventListener('click', function() {
  let value = document.getElementById('task').value;

  addTask(value);
});


// --------------関数---------------

function addTask (value) {
  addTaskToDOM(value);
  document.getElementById('task').value = '';

  data.task.push(value);
  dataObjectUpdated();
}

function addTaskToDOM(text, isDone) {
  let list;
  if (isDone) {
    list = document.getElementById('done');
  } else {
    list = document.getElementById('not-yet');
  }

  let task = document.createElement('li');
  task.textContent = text;

  let buttons = document.createElement('div');
  buttons.classList.add('buttons');

  //削除ボタンを作成
  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeIcon;

  //削除ボタンをクリックした時の動作を追加
  remove.addEventListener('click', removeTask);

  //完了ボタンを作成
  let done = document.createElement('button');
  done.classList.add('done');
  done.innerHTML = doneIcon;

  //完了ボタンを押した時の動作を追加
  done.addEventListener('click', doneTask);

  //DOMの組み立て
  buttons.appendChild(remove);
  buttons.appendChild(done);
  task.appendChild(buttons);

  //組み立てたDOMをインサート
  list.insertBefore(task, list.childNodes[0]);
}

//削除ボタンを押したとき
function removeTask() {
  let task = this.parentNode.parentNode;
  let id = task.parentNode.id;
  let value = task.textContent;

  //画面から削除
  task.remove();

  //ストレージから削除
  if (id === 'not-yet') {
    data.task.splice(data.task.indexOf(value), 1);
  } else {
    data.done.splice(data.done.indexOf(value), 1);
  }
  dataObjectUpdated();
  
}

//完了ボタンを押したとき
function doneTask() {
  let task = this.parentNode.parentNode;
  let id = task.parentNode.id;
  if (id !== 'not-yet') {
    return;
  }

  let value = task.textContent;

  //完了一覧に追加
  let target = document.getElementById('done');
  target.insertBefore(task, target.childNodes[0]);

  //ストレージも更新
  data.task.splice(data.task.indexOf(value), 1);
  data.done.push(value);
  dataObjectUpdated();
}

function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(data));
}

function renderTodoList() {
  //未完了タスクを一覧で表示
  for (let value of data.task) {
    addTaskToDOM(value);
  }

  for (let value of data.done) {
    addTaskToDOM(value, true);
  }
}