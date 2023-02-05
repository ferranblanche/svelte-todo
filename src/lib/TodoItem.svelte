<script lang="ts">
  import type { Todo } from "../types";

  export let todo: Todo;  
</script>

<div>
  <input type="checkbox" bind:checked={todo.completed} />
  <p>{todo.content}</p>
  <button class="outlined neutral">Edit</button>
  <button class="outlined neutral">Delete</button>
</div>

<style lang="postcss">
  div {
    @apply flex flex-row items-center justify-between gap-4 p-8 border-b border-neutral-100;
  }

  p {
    @apply grow;
  }
</style>