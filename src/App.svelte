<script lang="ts">
  import { todoStore } from "./todoStore";
  import AddTodoForm from "./lib/AddTodoForm.svelte";
</script>

<main>
  <AddTodoForm />
  {#each $todoStore as todo}
    <p>{todo.content}</p>
  {/each}
</main>
