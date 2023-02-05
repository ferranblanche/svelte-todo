<script lang="ts">
  import { todoStore } from "../todoStore";
  import type { Todo } from "../types";

  export let todo: Todo;
  export let index: number;

  function handleTodoDelete() {
    todoStore.update((todos) => todos.filter((t, i) => i != index));
  }
</script>

<div>
  <input type="checkbox" bind:checked={todo.completed} />
  <p>{todo.content}</p>
  <button class="outlined neutral">Edit</button>
  <button class="outlined neutral" on:click={handleTodoDelete}>Delete</button>
</div>

<style lang="postcss">
  div {
    @apply flex flex-row items-center justify-between gap-4 p-8 border-b border-neutral-100;
  }

  p {
    @apply grow;
  }
</style>
