import { Component } from '@angular/core';

// 作業状態によるフィルタリングを行うヘルパー関数
let filters = {
  all: function (todos) {
    return todos;
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed;
    });
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed;
    });
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo リスト';
  todos = [ // ToDo リストを保持する配列
    // { id: 1, title: "リスト1", completed: true },
    // { id: 2, title: "リスト2", completed: false }
  ];
  uid = 0; // ToDo 新規追加時の id
  newTodo = ''; // ToDo 新規追加時の title
  visibility = "all"; // 一覧表示する作業状態。all: すべて、active: 作業中、completed: 完了

  // ToDo リストの追加処理
  addTodo(value: string) {
    let title = value && value.trim();
    if (!title) {
      return;
    }
    this.uid++;
    this.todos.push({
      id: this.uid,
      title: title,
      completed: false,
    });
    this.newTodo = '';
  }

  // ToDo リストの削除処理
  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  // 作業状態によりフィルタリングされた ToDo を返す
  filteredTodos = function () {
    return filters[this.visibility](this.todos);
  }
}
