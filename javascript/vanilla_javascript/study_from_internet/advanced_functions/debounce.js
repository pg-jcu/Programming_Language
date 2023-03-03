function debounce(func, delay) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

function updateLayout() {
  // update layout
}

const debouncedUpdateLayout = debounce(updateLayout, 250);

window.addEventListener("resize", debouncedUpdateLayout);
