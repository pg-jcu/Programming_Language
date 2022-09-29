export default function SearchInput({ $target, getData }) {
  this.$element = document.createElement('div');
  $target.prepend(this.$element);
  this.$element.innerHTML = '<input id="search-keyword" />';

  this.render = () => {};

  this.setState = () => {};

  const searchKeyword = document.querySelector('#search-keyword');

  searchKeyword.addEventListener('keyup', async (e) => {
    const response = await fetch(`https://api.idiots.band/api/search?keyword=${e.target.value}`);
    const data = await response.json();

    getData(data);
  });
}
