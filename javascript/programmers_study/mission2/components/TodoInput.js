export default function TodoInput($target, addTodo) {
  if (!new.target) {
    throw new Error("Not used new keyword!!");
  }

  this.$element = document.createElement('div');
  $target.prepend(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
      <form name="todoInputForm">
        <input type="text" placeholder="할 일을 입력해주세요." name="todoInput"/>
        <button name="todoInputButton">추가</button>
      </form>
    `;
  }

  this.render();

  this.$element.addEventListener('submit', event => {
    event.preventDefault();

    const $form = document.forms.todoInputForm;
    const $input = $form.elements.todoInput;

    if ($input.value === '') {
      throw new Error('No input value!!');
    }

    const nextData = [{ text: $input.value, isCompleted: false }];

    addTodo(nextData);

    $input.value = '';
    $input.focus();
  });
}