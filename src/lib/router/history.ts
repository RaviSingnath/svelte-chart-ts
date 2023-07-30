import { writable } from 'svelte/store';

export const history = writable(window.location)

export const navigate = (path) => {
  window.history.pushState(null, null, path);
  history.set(window.location)
}
