import { writable } from 'svelte/store';
import type { Todo } from '../types';

let todos: Todo[] = [];

const todoStore = writable(todos);

export { todoStore };