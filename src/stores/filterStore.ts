import { writable } from 'svelte/store';

let filter: boolean = false;

const filterStore = writable(filter);

export { filterStore };