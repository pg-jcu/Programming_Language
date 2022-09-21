export default function TodoInput($target) {
  this.$element = document.createElement('div');
  this.$target = $target;

  console.log(this.$target);

  this.render = () => {
    this.$element.innerHTML = `<input type="text" />`;

    this.$target.prepend(this.$element);
  }

  this.render();

  this.$element.addEventListener('change', event => {
    console.log(event.target.value);
  })
}