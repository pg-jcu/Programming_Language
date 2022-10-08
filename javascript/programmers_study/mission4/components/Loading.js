export default function Loading({ $target }) {
  this.$element = document.createElement('div');
  this.$element.id = 'Loading';
  this.$element.innerHTML = '<span class="loader"></span>';

  this.on = () => {
    $target.classList.toggle('Loading');
    $target.before(this.$element);
  };

  this.off = () => {
    $target.classList.toggle('Loading');
    this.$element.remove();
  };
}
