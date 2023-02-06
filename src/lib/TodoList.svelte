<script lang="ts">
  import { todoStore } from "../stores/todoStore";
  import { filterStore } from "../stores/filterStore";
  import TodoItem from "./TodoItem.svelte";
</script>

{#if $todoStore.length}
  {#each $todoStore as todo, index}
    {#if !$filterStore || ($filterStore && !todo.completed) }
      <TodoItem {todo} {index} />
    {/if}
  {/each}
{:else}
  <p>Add something to do</p>
{/if}

<style lang="postcss">
  p {
    @apply p-8;
  }
</style>
