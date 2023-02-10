<script>
    /** @type {import('./$types').PageData} */ export let data;
    import Button from "../Button.svelte";
  </script>
  
  {#each data.streams as { user_name,url }}
    <Button user_name={user_name} image_url={url} />
  {/each}