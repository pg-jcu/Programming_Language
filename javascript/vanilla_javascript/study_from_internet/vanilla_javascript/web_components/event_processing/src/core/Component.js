export default class Component {
  $target;
  $state;

  constructor($target) {
    this.$target = $target;
    this.setup();
    this.setEvent(); // 한 번만 실행
    this.render();
  }

  setup() {};
  template() { return ''; }
  render() {
    this.$target.innerHTML = this.template();
    // this.setEvent();
  }

  setEvent() {}
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  addEvent(eventType, selector, callback) {
    const children = [ ...this.$target.querySelectorAll(selector) ];
    const isTarget = target => children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}