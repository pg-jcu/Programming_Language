export default function TodoInput($target, list) {
  this.$element = document.createElement('div');
  this.$target = $target;

  this.render = () => {
    this.$element.innerHTML = `
      <form>
        <input type="text" placeholder="할 일을 입력해주세요."/>
        <button>추가</button>
      </from>
    `;

    this.$target.prepend(this.$element);
  }

  this.render();

  this.$element.addEventListener('submit', event => {
    event.preventDefault();

    const $input = event.target.querySelector('input');

    list.setState([{ text: $input.value, isCompleted: false }]);

    $input.value = '';
    $input.focus();
  });
}