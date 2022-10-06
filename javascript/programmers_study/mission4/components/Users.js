export default function Users({ $target, initialState }) {
  if (!new.target) {
    throw new Error('Not used new keyword!!');
  }

  this.$element = document.createElement('div');
  this.$element.id = 'Users';
  $target.prepend(this.$element);
  this.state = initialState;

  this.render = () => {
    const list = this.state.map((user) => `
        <li>${user}</li>
      `
    ).join('');

    this.$element.innerHTML = `<ul>${list}</ul>`;
  }

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render();
}
