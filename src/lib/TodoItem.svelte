<script lang="ts">
  import { todoStore } from "../todoStore";
  import type { Todo } from "../types";

  export let todo: Todo;
  export let index: number;

  function handleTodoEdit() {
    todo.editing = true;
  }

  function handleTodoSave() {
    todo.editing = false;
  }

  function handleTodoDelete() {
    todoStore.update((todos) => todos.filter((t, i) => i != index));
  }
</script>

<div>
  <input type="checkbox" bind:checked={todo.completed} />
  <input type="text" bind:value={todo.content} disabled={!todo.editing} />
  {#if todo.editing}
    <button class="outlined neutral" on:click={handleTodoSave}>Save</button>
  {:else}
    <button class="outlined neutral" on:click={handleTodoEdit}>Edit</button>
  {/if}
  <button class="outlined neutral" on:click={handleTodoDelete}>Delete</button>
</div>

<style lang="postcss">
  div {
    @apply flex flex-row items-center justify-between gap-4 p-8 border-b border-neutral-100;
  }

  input[type="text"] {
    @apply grow disabled:border-transparent;
  }
</style>
