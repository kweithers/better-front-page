<script>
  export let image_url;
  export let user_name;
</script>

<div class="row" id="row-{user_name}">
  <img
    title={user_name}
    src={image_url}
    alt="{user_name}'s profile picture"
  />
  <div class="scroller" id={user_name} />
</div>

<style>
  img {
    width: 75px;
    height: 75px;
  }
</style>
