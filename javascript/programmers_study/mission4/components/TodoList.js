export default function TodoList({ $target, initialState }) {
  if (!new.target) {
    throw new Error("Not used new keyword!!");
  }

  this.$element = document.createElement('div');
  $target.append(this.$element);
  this.state = initialState;

  this.render = () => {
    const list = this.state.map(({ _id ,content, isCompleted }) => `
        <li data-id="${_id}">
          <span>${isCompleted ? `<s>${content}</s>` : `${content}`}</span>
          <button>삭제</button>
        </li>
      `
    ).join('');

    this.$element.innerHTML = `<ul>${list}</ul>`;
  };

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render();

  // this.$element.addEventListener('click', event => {
  //   const $li = event.target.closest('li');

  //   if (event.target.closest('button')) {
  //     removeTodo($li.dataset.id);
  //   }

  //   if (event.target.closest('span')) {
  //     completeTodo($li.dataset.id);
  //   }
  // });
}
