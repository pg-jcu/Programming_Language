export default function UsersList({ 
  $target,
  initialState, 
  initialLike, 
  onShow, 
  onLike,
  onUsersShow
 }) {
  if (!new.target) {
    throw new Error('Not used new keyword!!');
  }

  this.$element = document.createElement('div');
  this.$element.id = 'UsersList';
  $target.prepend(this.$element);
  this.state = initialState;
  this.like = initialLike;

  this.render = () => {
    const list = this.state.map((user) => `
        <li data-user-id="${user}">
          <button>${this.like[user] ? '💙' : '🤍'}</button>
          <span>${user}</span>
        </li>
      `
    ).join('');

    this.$element.innerHTML = `
      <p>좋아요만 보기<input type="checkbox" /></p>
      <ul>${list}</ul>
    `;
  }

  this.setState = (nextState, nextLike) => {
    this.state = nextState;
    this.like = nextLike;
    this.render();
  }

  this.render();

  this.$element.addEventListener('click', (event) => {
    const $li = event.target.closest('li');

    if (event.target.closest('span')) {
      onShow($li.dataset.userId);
    }

    if (event.target.closest('button')) {
      onLike($li.dataset.userId);
    }

    if (event.target.closest('input')) {
      if (event.target.checked) {
        onUsersShow(event.target.checked = true);
      } else {
        onUsersShow(event.target.checked = false);
      }
    }
  });
}
