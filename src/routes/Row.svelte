<script>
  export let image_url;
  export let user_name;
  export let viewer_count;
</script>

<div class="row" id="row-{user_name}">
  <div class="streamer-card">
    <div>
      {user_name}
    </div>
    <div>
      <img
        class="smolbutton"
        src="https://em-content.zobj.net/thumbs/240/apple/325/large-red-circle_1f534.png"
        alt="red button"
      />
      {viewer_count}
    </div>
  </div>
  <a href="https://twitch.tv/{user_name}" target="_blank" rel="noopener noreferrer">
    <img
      title={user_name}
      src={image_url}
      alt="{user_name}'s profile picture"
    />
  </a>
  <div class="scroller" id={user_name} />
</div>

<style>
  .streamer-card {
    flex-direction: column;
    font-family: "Inter Tight", sans-serif;
    font-size: 16px;
    color: white;
    width: 100px;
    flex: 0 0 auto;
  }
  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 2px solid black;
  }
  .smolbutton {
    width: 10px;
    height: 10px;
  }
</style>
