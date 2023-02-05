<script lang="ts">
  import { todoStore } from "../todoStore";
  import TodoItem from "./TodoItem.svelte";
</script>

{#if $todoStore.length}
  {#each $todoStore as todo, index}
    <TodoItem {todo} {index} />
  {/each}
{:else}
  <p>Add something to do</p>
{/if}

<style lang="postcss">
  p {
    @apply p-8;
  }
</style>