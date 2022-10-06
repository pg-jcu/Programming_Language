export default function UsersList({ $target, initialState, onShow }) {
  if (!new.target) {
    throw new Error('Not used new keyword!!');
  }

  this.$element = document.createElement('div');
  this.$element.id = 'UsersList';
  $target.prepend(this.$element);
  this.state = initialState;

  this.render = () => {
    const list = this.state.map((user) => `
        <li data-user-id="${user}">${user}</li>
      `
    ).join('');

    this.$element.innerHTML = `<ul>${list}</ul>`;
  }

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render();

  this.$element.addEventListener('click', (event) => {
    const $li = event.target.closest('li');

    if ($li) {
      onShow($li.dataset.userId);
    }
  });
}
