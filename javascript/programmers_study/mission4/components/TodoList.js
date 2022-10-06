export default function TodoList({ $target, initialState, onDelete, onToggle }) {
  if (!new.target) {
    throw new Error("Not used new keyword!!");
  }

  this.$element = document.createElement('div');
  this.$element.id = 'TodoList';
  $target.append(this.$element);
  this.state = initialState;

  this.render = () => {
    const list = this.state.map(({ _id ,content, isCompleted }) => `
        <li data-id="${_id}">
          <span>${isCompleted ? `<s>${content}</s>` : `${content}`}</span>
          <button>❌</button>
        </li>
      `
    ).join('');

    this.$element.innerHTML = `<ul>${list}</ul>`;
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render();

  this.$element.addEventListener('click', (event) => {
    const $li = event.target.closest('li');

    if (event.target.closest('button')) {
      onDelete($li.dataset.id);
    }

    if (event.target.closest('span')) {
      onToggle($li.dataset.id);
    }
  });
}
