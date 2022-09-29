export default function SearchInput({ $target, getData }) {
  if (!new.target) {
    throw new Error('Not used new keyword!!');
  }
  
  this.$element = document.createElement('div');
  $target.prepend(this.$element);
  this.$element.innerHTML = '<input id="search-keyword" />';

  this.render = () => {};

  this.setState = () => {};

  const searchKeyword = document.querySelector('#search-keyword');
  let timer;

  searchKeyword.addEventListener('keyup', (e) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(async () => {
      const url = `https://api.idiots.band/api/search?keyword=${e.target.value}`;
      const response = await fetch(url);
      const data = await response.json();

      getData(data);
    }, 500);
  });
}
