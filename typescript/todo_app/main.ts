import App from "./App";
import { getItem } from "./utils/storage";
import { STORAGE_KEY } from "./constants";

const $target = document?.querySelector('#App');
new App($target, getItem(STORAGE_KEY, []));