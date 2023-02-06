<script lang="ts">
  import type { Todo } from "../types";
  import { todoStore } from "../stores/todoStore";

  let inputValue: string;

  function handleAddTodoForm(): void {
    let newTodoContent: string = inputValue;
    if (newTodoContent) {
      let todo: Todo = {
        content: newTodoContent,
        completed: false,
        editing: false
      };
      todoStore.update((todos) => [...todos, todo]);
      inputValue = "";
    }
  }
</script>

<form on:submit|preventDefault={handleAddTodoForm}>
  <input id="todo" type="text" placeholder="What needs to be done?" bind:value={inputValue} autofocus />
  <button type="submit" class="filled accent" disabled={!inputValue}>Add</button>
</form>

<style lang="postcss">
  form {
    @apply p-8 flex flex-row justify-between items-center gap-4 border-inherit;
  }

  input {
    @apply grow rounded;
  }
</style>
