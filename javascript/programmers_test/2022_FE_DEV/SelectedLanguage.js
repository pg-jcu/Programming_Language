export default function SelectedLanguage({ $target }) {
  this.$element = document.createElement('div');
  this.$element.className = 'SelectedLanguage';
  this.state = JSON.parse(localStorage.getItem('selected')) || [];

  $target.prepend(this.$element);

  this.setState = (nextState) => {
      this.state = nextState;
      this.render();
  };

  this.render = () => {
      const list = this.state.map((lang) => `
          <li>${lang}</li>
      `).join('');

      this.$element.innerHTML = `<ul>${list}</ul>`;
  };

  this.render();
}