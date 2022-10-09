export default function UsersList({ 
  $target,
  initialState, 
  initialLike, 
  onShow, 
  onLike,
  onUsersLikedShow
 }) {
  if (!new.target) {
    throw new Error('Not used new keyword!!');
  }

  this.$element = document.createElement('div');
  this.$element.id = 'UsersList';
  $target.prepend(this.$element);
  this.state = initialState;
  this.likedUsers = initialLike;

  this.render = () => {
    const list = this.state.map((user) => `
        <li data-user-id="${user}">
          <button>${this.likedUsers[user] ? '💙' : '🤍'}</button>
          <span>${user}</span>
        </li>
      `
    ).join('');

    this.$element.innerHTML = `
      <p>
        좋아요만 보기
        ${this.$element.classList.contains('checked') ? 
          `<input type="button" value="🔳"/>` :
          `<input type="button" value="🔲"/>`
        }
      </p>
      <ul>${list}</ul>
    `;
  }

  this.setState = (nextState, nextLike) => {
    this.state = nextState;
    this.likedUsers = nextLike;
    this.render();
  }

  this.render();

  this.$element.addEventListener('click', (event) => {
    const $li = event.target.closest('li');

    if (event.target.closest('span')) {
      onShow($li.dataset.userId);
    }

    if (event.target.closest('button')) {
      if (!this.$element.classList.contains('checked')) {
        onLike($li.dataset.userId);
      }
    }

    if (event.target.closest('input')) {
      this.$element.classList.toggle('checked');

      if (this.$element.classList.contains('checked')) {
        onUsersLikedShow(true);
      } else {
        onUsersLikedShow(false);
      }
    }
  });
}
