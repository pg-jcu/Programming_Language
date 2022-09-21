import checkData from "../utils/checkData.js";

export default function TodoList($target, data) {
  if (!new.target) {
    throw new Error("Not used new keyword!!");
  }

  this.$element = document.createElement('div');
  this.state = data;
  this.$target = $target;

  this.render = () => {
    const list = this.state.map(({ text, isCompleted }) => 
      isCompleted ? 
        `<li><s>${text}</s></li>` :
        `<li>${text}</li>`
    ).join('');

    this.$element.innerHTML = `<ul>${list}</ul>`;
    this.$target.append(this.$element);
  }

  this.setState = (nextData) => {
    checkData(nextData);
    this.state = [ ...this.state, ...nextData ];
    this.render();
  } 

  this.render();
}