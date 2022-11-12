export default function SearchInput({ $target, onChange }) {
  this.$element = document.createElement('form');
  this.$element.className = 'SearchInput';
  this.state = localStorage.getItem('input') || '';

  $target.append(this.$element);

  this.render = () => {
      this.$element.innerHTML = `
          <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}">
      `;
      document.querySelector('.SearchInput__input').focus();
  }

  this.render();

  this.$element.addEventListener('keyup', (e) => {
      const actionIgnoreKeys = ['Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

      if (!actionIgnoreKeys.includes(e.key)) {
          localStorage.setItem('input', e.target.value);
          onChange(e.target.value);
      }
  });

  this.$element.addEventListener('submit', (e) => {
      e.preventDefault();
  });
}