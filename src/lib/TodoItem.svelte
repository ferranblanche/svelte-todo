<script lang="ts">
  import { todoStore } from "../stores/todoStore";
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

<form on:submit|preventDefault={handleTodoSave}>
  <input type="checkbox" bind:checked={todo.completed} />
  <input type="text" bind:value={todo.content} disabled={!todo.editing} />
  {#if todo.editing}
    <button type="submit" class="outlined neutral" on:click={handleTodoSave}>Save</button>
  {:else}
    <button class="outlined neutral" on:click={handleTodoEdit}>Edit</button>
  {/if}
  <button class="outlined neutral" on:click={handleTodoDelete}>Delete</button>
</form>

<style lang="postcss">
  form {
    @apply flex flex-row items-center justify-between gap-4 p-8 border-b border-neutral-100 dark:border-neutral-900;
  }

  input[type="text"] {
    @apply grow disabled:border-transparent;
  }
</style>
