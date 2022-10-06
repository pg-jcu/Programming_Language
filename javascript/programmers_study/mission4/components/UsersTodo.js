export default function UsersTodo({ $target }) {
  if (!new.target) {
    throw new Error('Not used new keyword!!');
  }

  this.$element = document.createElement('div');
  this.$element.id = 'UsersTodo';
  $target.append(this.$element);
  this.userId = '';
  this.state = [];

  this.render = () => {
    const list = this.state.map(({ content, isCompleted }) => `
        <li>
          ${isCompleted ? `<s>${content}</s>` : `${content}`}
        </li>
      `
    ).join('');

    this.$element.innerHTML = `
      <h3>${this.userId !== '' ? `${this.userId} 님의 할 일` : ''}</h3>
      <ul>${list}</ul>
    `;
  };

  this.setState = (userId, nextState) => {
    this.userId = userId;
    this.state = nextState;
    this.render();
  };

  this.render();
}
