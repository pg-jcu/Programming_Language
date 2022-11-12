export default function Suggestion({ $target, onSelect }) {
  this.$element = document.createElement('div');
  this.$element.className = 'Suggestion';
  this.state = { 
      items: [],
      selectedIndex : 0
  };

  $target.append(this.$element);

  this.setState = (nextState) => {
      this.state = {
          ...this.state,
          ...nextState
      };
      this.render();
  }

  this.render = () => {
      const { items, selectedIndex } = this.state;

      if (items.length > 0) {
          const list = items.map((item, idx) => `
              <li class="${idx === selectedIndex ? 'Suggestion__item--selected' : ''}">${item}</li>
          `).join('');

          this.$element.style.display = '';
          this.$element.innerHTML = `<ul>${list}</ul>`;
      } else {
          this.$element.style.display = 'none';
          this.$element.innerHTML = '';
      }
  }

  this.render();

  window.addEventListener('keyup', (e) => {
      if (this.state.items.length > 0) {
          const { items, selectedIndex } = this.state;
          const lastIndex = items.length - 1;
          const navigationKeys = ['ArrowUp', 'ArrowDown'];
          let nextIndex = selectedIndex;

          if (navigationKeys.includes(e.key)) {
              if (e.key === 'ArrowUp') {
                  nextIndex = selectedIndex === 0 ? lastIndex : nextIndex - 1;
              } else {
                  nextIndex = selectedIndex === lastIndex ? 0 : nextIndex + 1;
              }

              this.setState({
                  ...this.state,
                  selectedIndex: nextIndex
              });
          } else if (e.key === 'Enter') {
              onSelect(this.state.items[nextIndex]);
          }
      }
  });

  this.$element.addEventListener('click', (e) => {
      const $li = e.target.closest('li');

      if ($li) {
          onSelect($li.textContent);
      }
  });
}