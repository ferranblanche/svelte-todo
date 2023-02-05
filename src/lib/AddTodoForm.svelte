<script lang="ts">
  import type { Todo } from "../types";
  import { todoStore } from "../todoStore";

  function handleAddTodoForm(event): void {
    let newTodoContent: string = event.target.todo.value;
    if (newTodoContent) {
      let todo: Todo = {
        content: newTodoContent,
        completed: false,
        editing: false
      };
      todoStore.update((todos) => [...todos, todo]);
      event.target.todo.value = "";
    }
  }
</script>

<form on:submit|preventDefault={handleAddTodoForm}>
  <input id="todo" type="text" placeholder="What needs to be done?" autofocus />
  <button type="submit" class="filled accent">Add</button>
</form>

<style lang="postcss">
  form {
    @apply p-8 flex flex-row justify-between items-center gap-4 border-inherit;
  }

  input {
    @apply grow rounded;
  }
</style>
