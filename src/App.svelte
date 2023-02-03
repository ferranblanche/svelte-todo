<script lang="ts">
  import "@picocss/pico";
  import "./styles/theme.css";

  let todos: string[] = ["todo #1", "todo #2", "todo #3"];

  function handleSubmit(event) {
    let todo = event.target.todo.value;
    todos = [...todos, todo]
  }
</script>

<main class="container">
  <article>
    <h1>Todo list</h1>
    <form on:submit|preventDefault={handleSubmit}>
      <input id="todo" type="text" placeholder="What needs to be done?" autofocus />
      <button>Add</button>
    </form>
    <ul>
      {#each todos as todo}
        <li>{todo}</li>
      {/each}
    </ul>
  </article>
</main>
