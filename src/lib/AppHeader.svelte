<script src="ts">
  import FilterTodoToggle from "./FilterTodoToggle.svelte";
</script>

<header>
  <div>
    <h1>Todo List</h1>
    <h2>Organize your work and life, finally.</h2>
  </div>
  <div>
    <FilterTodoToggle />
  </div>
</header>

<style lang="postcss">
  header {
    @apply p-8 flex flex-row justify-between items-center;
  }

  h1 {
    @apply text-2xl font-bold;
  }

  h2 {
    @apply font-light;
  }
</style>
