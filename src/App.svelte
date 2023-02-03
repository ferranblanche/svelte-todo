<script lang="ts">
  import "@picocss/pico";
  import "./styles/theme.css";

  let todos: string[] = ["todo #1", "todo #2", "todo #3"];

  function handleSubmit(event) {
    let todo = event.target.todo.value;
    todos = [...todos, todo];
  }
</script>

<main class="container">
  <article>
    <hgroup>
      <h2>Todo list</h2>
      <h3>Organize your work and life, finally.</h3>
    </hgroup>
    <form on:submit|preventDefault={handleSubmit}>
      <input
        id="todo"
        type="text"
        placeholder="What needs to be done?"
        autofocus
      />
      <button>Add</button>
    </form>
    {#each todos as todo}
      <label for="">
        <input type="checkbox" />
        {todo}
      </label>
    {/each}
  </article>
</main>
