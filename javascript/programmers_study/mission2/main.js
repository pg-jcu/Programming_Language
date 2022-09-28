import App from "./App.js";
import { getItem } from "./utils/storage.js";
import { STORAGE_KEY } from "./constants.js";

const $target = document.querySelector('#App');
new App($target, getItem(STORAGE_KEY, []));