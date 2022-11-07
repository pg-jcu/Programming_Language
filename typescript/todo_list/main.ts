type Data = {
  text: string,
  isCompleted: boolean
};

const data: Array<Data> = [
  {
    text: 'JS 공부하기',
    isCompleted: true
  },
  {
    text: 'JS 복습하기',
    isCompleted: true
  }
];

const wantData: Array<Data> = [
  {
    text: '잠자기',
    isCompleted: true
  },
  {
    text: '쉬기',
    isCompleted: false
  }
];

const notData: Array<Data> = [
  {
    text: '운동하기',
    isCompleted: true
  },
  {
    text: '돈벌기',
    isCompleted: false
  }
];

function checkData(data: Array<Data>): void {
  if (data == null) {
    throw new Error("Data is null or undefined!");
  }

  if (!Array.isArray(data)) {
    throw new Error("Not array type!");
  }

  if (!data.every(value => 'text' in value && 'isCompleted' in value)) {
    throw new Error("Incomplete data: no text or isCompleted!");
  }
}

function TodoList(data: Array<Data>, targetId: string): void {
  if (!new.target) {
    throw new Error("Not used new keyword!!");
  }

  checkData(data);

  let _state = data;
  this.target = targetId;

  this.render = () => {
    const list: string = _state.map(({ text, isCompleted }) => 
      isCompleted ? 
        `<li><s>${text}</s></li>` :
        `<li>${text}</li>`
    ).join('');

    (document.querySelector(`#${this.target}`) as HTMLDivElement).innerHTML = `<ul>${list}</ul><hr />`;
  }

  this.setState = (nextData: Array<Data>) => {
    checkData(nextData);
    _state = [ ..._state, ...nextData ];
    this.render();
  } 
}

const todo = new TodoList(data, 'todo-list');
const wantTodo = new TodoList(wantData, 'want-todo');
const notTodo = new TodoList(notData, 'not-todo');

todo.render();
wantTodo.render();
notTodo.render();

todo.setState([{ text: '독서하기', isCompleted: true }]);