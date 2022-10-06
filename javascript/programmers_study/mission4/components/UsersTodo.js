export default function UsersTodo({ $target }) {
  if (!new.target) {
    throw new Error('Not used new keyword!!');
  }

  this.$element = document.createElement('div');
  this.$element.id = 'UsersTodo';
  $target.append(this.$element);
  this.state = [];

  this.render = () => {
    const list = this.state.map(({ content, isCompleted }) => `
        <li>
          ${isCompleted ? `<s>${content}</s>` : `${content}`}
        </li>
      `
    ).join('');

    this.$element.innerHTML = `<ul>${list}</ul>`;
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();

    console.log(nextState);
  };

  this.render();
}
