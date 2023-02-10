<script>
  export let image_url;
  export let user_name;
  let selected = false;
</script>

<input
  class:selected
  on:click={() => (selected = !selected)}
  title={user_name}
  type="image"
  id="button-{user_name}"
  src="{image_url}"
  alt="{user_name}'s profile picture"
/>

<style>
  input {
    width: 70px;
    height: 70px;
    opacity: 1;
  }
  .selected {
    opacity: 1;
  }
</style>
