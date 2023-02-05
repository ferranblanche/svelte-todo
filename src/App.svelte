<script lang="ts">
  import { todoStore } from "./todoStore";
  import AppHeader from "./lib/AppHeader.svelte";
  import AddTodoForm from "./lib/AddTodoForm.svelte";
  import TodoList from "./lib/TodoList.svelte";
</script>

<main>
  <div>
    <span>
      <AppHeader />
    </span>
    <span>
      <AddTodoForm />
    </span>
    <span>
      <TodoList />
    </span>
  </div>
</main>

<style lang="postcss">
  main {
    @apply h-[100vh] p-8 bg-neutral-100;
  }

  div {
    @apply container mx-auto bg-white rounded grid grid-cols-1 divide-y;
  }
</style>
