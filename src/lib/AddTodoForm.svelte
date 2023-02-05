<script lang="ts">
  import type { Todo } from "../types";
  import { todoStore } from "../todoStore";

  function addTodo(event): void {
    let todo: Todo = {
      content: event.target.todo.value,
      completed: false,
    };
    todoStore.update((todos) => [...todos, todo]);
  }
</script>

<form on:submit|preventDefault={addTodo}>
  <input id="todo" type="text" placeholder="What needs to be done?" autofocus />
  <button type="submit">Add</button>
</form>
