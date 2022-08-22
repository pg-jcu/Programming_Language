import Component from "../core/Component.js";

export default class Items extends Component {
  setup() {
    this.$state = { items: ['1', '2', '3'] };
  }

  template() {
    const { items } = this.$state;
    return `
      <button class="addBtn">추가</button>
      <ul>
        ${items.map((item, key) => `
          <li>
            ${item}
            <button class="deleteBtn" data-index="${key}">삭제</button>
          </li>
        `).join('')}
      </ul>
    `
  }

  setEvent() {
    // this.$target.querySelector('.addBtn').addEventListener('click', () => {
    //   const { items } = this.$state;
    //   this.setState({ items: [ ...items, `${items.length + 1}` ] });
    // });

    // this.$target.querySelectorAll('.deleteBtn').forEach(deleteBtn => 
    //   deleteBtn.addEventListener('click', event => {
    //     const items = [ ...this.$state.items ];
    //     items.splice(event.target.dataset.index, 1);
    //     this.setState({ items });
    //   })
    // );
    
    // this.$target.addEventListener('click', event => {
    //   const items = this.$state.items;

    //   if (event.target.classList.contains('addBtn')) {
    //     this.setState({ items: [ ...items, `${items.length + 1}` ] });
    //   }

    //   if (event.target.classList.contains('deleteBtn')) {
    //     items.splice(event.target.dataset.index, 1);
    //     this.setState({ items });
    //   }
    // });
  
    this.addEvent('click', '.addBtn', () => {
      const { items } = this.$state;
      this.setState({ items: [ ...items, `${items.length + 1}` ] });
    });

    this.addEvent('click', '.deleteBtn', ({ target }) => {
      const items = this.$state.items;
      items.splice(target.dataset.index, 1);
      this.setState({ items });
    }); 
  }
}