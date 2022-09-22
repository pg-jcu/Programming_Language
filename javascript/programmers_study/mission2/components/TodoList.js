export default function TodoList($target, initialState) {
  if (!new.target) {
    throw new Error("Not used new keyword!!");
  }

  this.$element = document.createElement('div');
  $target.append(this.$element);
  this.state = initialState;

  this.render = () => {
    const list = this.state.map(({ text, isCompleted }) => 
      isCompleted ? 
        `<li><s>${text}</s></li>` :
        `<li>${text}</li>`
    ).join('');

    this.$element.innerHTML = `<ul>${list}</ul>`;
  }

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  }

  this.render();
}