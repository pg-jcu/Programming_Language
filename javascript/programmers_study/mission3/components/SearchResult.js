export default function SearchResult({ $target, initialState }) {
  if (!new.target) {
    throw new Error('Not used new keyword!!');
  }
  
  this.$element = document.createElement('div');
  this.$element.id = 'search-result';
  $target.append(this.$element);

  this.state = initialState;

  this.render = () => {
    const htmlString = `${this.state.map(d => 
      `
        <div style="display: inline-block; width: 33%">
          <img src="${d.poster}" style="object-fit: cover; width: 100%;">
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
}
