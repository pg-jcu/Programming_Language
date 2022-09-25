import App from "./App.js";

let data = localStorage.getItem('data');

if (!data) {
  data = [];
} else {
  data = JSON.parse(localStorage.getItem('data'));
};

const $target = document.querySelector('#App');
new App($target, data);