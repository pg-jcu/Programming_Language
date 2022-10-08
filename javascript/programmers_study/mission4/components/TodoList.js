export default function TodoList({ $target, initialState, isCompletedList, onDelete, onToggle }) {
  if (!new.target) {
    throw new Error("Not used new keyword!!");
  }

  this.$element = document.createElement('div');
  this.$element.className = `TodoList`;
  $target.append(this.$element);
  this.state = initialState;

  this.render = () => {
    const list = this.state.map(({ _id ,content, isCompleted }) => `
        <li data-id="${_id}" draggable="true">
          <span>${isCompleted ? `<s>${content}</s>` : `${content}`}</span>
          <button>❌</button>
        </li>
      `
    ).join('');

    this.$element.innerHTML = `
      <p>${isCompletedList ? '완료' : '미완료'}</p>
      <ul>${list}</ul>
    `;
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

  this.$element.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', JSON.stringify({
      id: event.target.closest('li').dataset.id,
      isCompletedList
    }));
  });

  this.$element.addEventListener('dragover', (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  });

  this.$element.addEventListener('drop', (event) => {
    event.preventDefault();

    const { id: draggedId, isCompletedList: draggedCompletedList } = JSON.parse(
      event.dataTransfer.getData('text/plain')
    );
    
    if (isCompletedList !== draggedCompletedList) {
      onToggle(draggedId);
    }
  });
}
