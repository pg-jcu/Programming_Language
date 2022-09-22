export default function TodoCount($target, initialState) {
  if (!new.target) {
    throw new Error("Not used new keyword!!");
  }
  
  this.$element = document.createElement('div');
  $target.append(this.$element);
  this.state = initialState;

  this.render = () => {
    this.$element.innerHTML = `
      Total: ${this.state.length} / 
      Completed: ${this.state.filter(({ isCompleted }) => isCompleted).length}
    `;
  }

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  }

  this.render();
}