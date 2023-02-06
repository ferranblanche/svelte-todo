<script lang="ts">
  import { filterStore } from "../stores/filterStore";
</script>

<label for="switch">
  Filter completed
  <input type="checkbox" bind:checked={$filterStore} />
</label>

<style lang="postcss">
  input {
    @apply ml-2;
  }
</style>
