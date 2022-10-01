export default function SearchHistory({ $target, initialState, setResult }) {
  if (!new.target) {
    throw new Error('Not used new keyword!!');
  }

  this.$element = document.createElement('div');
  this.$element.id = 'search-history';
  $target.prepend(this.$element);

  this.state = initialState;

  this.render = () => {
    const history = `
      <ul style="list-style: none; padding: 0px;">${this.state.history.map(value => 
        `
          <li style="display: inline;" data-word="${value}">
            ${value}
          </li>
        `
      ).join('')}</ul>
    `;

    this.$element.innerHTML = history;
  };

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render();

  this.$element.addEventListener('click', async (e) => {
    const $li = e.target.closest('li');

    if ($li) {
      const url = `https://api.idiots.band/api/search?keyword=${$li.dataset.word}`;
      const response = await fetch(url);
      const data = await response.json();

      setResult(data);
    }
  });
}