function throttle(func, delay) {
  let wait = false;

  return (...args) => {
    if (wait) {
      return;
    }

    func(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
}

function updateLayout() {
  // update layout
}

const throttledUpdateLayout = throttle(updateLayout, 250);

window.addEventListener("scroll", throttledUpdateLayout);
