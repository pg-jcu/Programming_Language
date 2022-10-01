export default function SearchResult({ $target, initialState, setResult }) {
  if (!new.target) {
    throw new Error('Not used new keyword!!');
  }

  this.$element = document.createElement('div');
  this.$element.id = 'search-result';
  $target.append(this.$element);

  this.state = initialState;

  this.render = () => {
    const htmlString = `${this.state.result.map(data => 
      `
        <div style="display: inline-block; width: 33%">
          <img src="${data.poster}" style="object-fit: cover; width: 100%;">
          <ul style="list-style: none; padding: 0px;">${data.musicians.map(musician => 
            `
              <li data-word="${musician}" style="border: 2px solid black; margin-bottom: 2px;">
                ${musician}
              </li>
            `
            ).join('')}
          </ul>
        </div>
      ` 
    ).join('')}`;
    
    document.querySelector('#search-result').innerHTML = htmlString;
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
