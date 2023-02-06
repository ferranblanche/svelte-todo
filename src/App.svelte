<script lang="ts">
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
    @apply h-[100vh] p-8 bg-neutral-100 dark:bg-neutral-900 dark:text-white;
  }

  div {
    @apply container mx-auto bg-white dark:bg-neutral-800 rounded grid grid-cols-1 divide-y dark:divide-neutral-900;
  }
</style>
